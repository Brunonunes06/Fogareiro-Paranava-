// ========== MENU MOBILE - TOGGLE HAMBURGER ========== 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu quando clicar em um link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// ========== SMOOTH SCROLL PARA ÂNCORAS ========== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Apenas prevenir o comportamento padrão se não for #
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = 70; // Altura do header fixo
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========== INTERSECTION OBSERVER PARA ANIMAÇÕES ========== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicionar classe de animação
            if (entry.target.dataset.aos === 'fade-up') {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os elementos com data-aos
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========== EFEITO NO HEADER AO SCROLL ========== 
let lastScrollPosition = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollPosition = currentScroll;
});

// ========== SCROLL TO TOP COM EFEITO ========== 
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Você pode usar isso para uma barra de progresso se desejar
    // document.body.style.setProperty('--scroll', `${scrollPercent}%`);
});

// ========== CONTADOR DE ANIMAÇÃO PARA NÚMEROS ========== 
function animateCounter(element, targetNumber, duration = 2000) {
    const startNumber = 0;
    const increment = targetNumber / (duration / 16);
    let currentNumber = startNumber;
    
    const updateNumber = () => {
        currentNumber += increment;
        
        if (currentNumber < targetNumber) {
            element.textContent = Math.floor(currentNumber);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = targetNumber;
        }
    };
    
    updateNumber();
}

// ========== VALIDAÇÃO DE FORMULÁRIO (SE HOUVER) ========== 
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#D32F2F';
            isValid = false;
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// ========== EFEITO DE HOVER NOS CARDS ========== 
const menuCards = document.querySelectorAll('.menu-card, .service-card, .review-card');

menuCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========== ATIVA LINK ATIVO NO MENU DURANTE SCROLL ========== 
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== PRELOADER ========== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========== DETECT MOBILE DEVICE ========== 
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========== LAZY LOADING IMAGES (SE HOUVER) ========== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== ADICIONAR CLASSE AO LINK ATIVO ========== 
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: #FF6B35;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========== FUNÇÃO PARA ENVIAR PARA WHATSAPP ========== 
function sendToWhatsApp(message) {
    const phoneNumber = '5544390034340'; // Número do Fogareiro
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// ========== FUNÇÃO PARA CHAMADA TELEFÔNICA ========== 
function callRestaurant() {
    window.location.href = 'tel:+5544390034340';
}

// ========== DEBOUNCE FUNÇÃO ========== 
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== THROTTLE FUNÇÃO ========== 
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========== SCROLL REVEAL COM MAIS CONTROLE ========== 
const revealElements = () => {
    const reveals = document.querySelectorAll('[data-aos]');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', throttle(revealElements, 50));

// ========== CARREGAR NA INICIALIZAÇÃO ========== 
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos com animação
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    revealElements();
});

// ========== ANALYTICS SIMPLES (RASTREAMENTO) ========== 
function trackEvent(eventName, eventData) {
    if (typeof console !== 'undefined') {
        console.log(`Event: ${eventName}`, eventData);
    }
}

// Rastrear cliques em botões
document.querySelectorAll('button, [class*="btn"]').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonText: this.textContent,
            buttonClass: this.className
        });
    });
});

// ========== MODO ESCURO (OPCIONAL) ========== 
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========== NOTIFICAÇÃO DE PEDIDO ========== 
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4CAF50' : '#FF5722'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== REDIRECIONAMENTO DE LINKS EXTERNOS ========== 
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        trackEvent('external_link_click', {
            href: this.href
        });
    });
});

// ========== VERIFICAR SCROLL ATÉ O TOPO ========== 
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #D32F2F;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopButton.addEventListener('mouseenter', function() {
    this.style.background = '#B71C1C';
    this.style.transform = 'scale(1.1)';
});

scrollToTopButton.addEventListener('mouseleave', function() {
    this.style.background = '#D32F2F';
    this.style.transform = 'scale(1)';
});

// ========== LOG DE INICIALIZAÇÃO ========== 
console.log('%c🔥 Fogareiro Paranavaí', 'font-size: 24px; font-weight: bold; color: #D32F2F;');
console.log('%cSite carregado com sucesso!', 'font-size: 14px; color: #FF6B35;');
console.log('%cVersão 1.0.0', 'font-size: 12px; color: #666;');
