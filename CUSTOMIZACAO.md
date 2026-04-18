# 🎨 Guia de Customização - Fogareiro Paranavaí

## Personalize seu site exatamente como você deseja!

Este guia mostra como fazer modificações e melhorias no site.

---

## 🎯 Alterações Simples

### 1. Alterar Cores

Abra `styles.css` e procure por `:root`:

```css
:root {
    --primary-red: #D32F2F;      /* Vermelha principal */
    --primary-dark: #B71C1C;     /* Vermelha escura */
    --secondary-orange: #FF6B35; /* Laranja */
    --accent-gold: #FFB700;      /* Ouro */
    --dark-bg: #1a1a1a;          /* Fundo escuro */
    --light-bg: #f8f8f8;         /* Fundo claro */
}
```

**Exemplos de cores quentes:**
- Vermelho escuro: `#8B0000`
- Vermelho intenso: `#FF0000`
- Laranja forte: `#FF4500`
- Marrom: `#8B4513`
- Dourado: `#FFD700`

### 2. Alterar Fontes

No `index.html`, adicione no `<head>`:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato&display=swap" rel="stylesheet">
```

Depois em `styles.css`:

```css
:root {
    --font-main: 'Lato', sans-serif;        /* Corpo do texto */
    --font-title: 'Playfair Display', serif; /* Títulos */
}
```

**Fontes recomendadas:**
- Títulos: `Playfair Display`, `Montserrat`, `Roboto Condensed`
- Corpo: `Open Sans`, `Lato`, `Roboto`, `Inter`

### 3. Alterar Espaçamentos

No `:root` do `styles.css`:

```css
:root {
    --spacing-xs: 0.5rem;    /* Pequeno */
    --spacing-sm: 1rem;      /* Normal */
    --spacing-md: 1.5rem;    /* Médio */
    --spacing-lg: 2rem;      /* Grande */
    --spacing-xl: 3rem;      /* Muito grande */
    --spacing-xxl: 5rem;     /* Máximo */
}
```

Aumente para mais espaço, diminua para mais compacto.

---

## 📝 Alterações de Conteúdo

### 1. Trocar Informações Básicas

Em `index.html`, procure por:

```html
<!-- Telefone -->
<a href="tel:+5544390034340">(44) 3900-3434</a>

<!-- WhatsApp -->
<a href="https://wa.me/5544390034340">WhatsApp</a>

<!-- Endereço -->
Shopping Cidade, R. Getúlio Vargas, 909, Paranavaí - PR

<!-- Horário -->
Aberto até 22:00

<!-- Avaliação -->
4,2 estrelas (36 avaliações)

<!-- Preço -->
R$ 40–60 por pessoa
```

### 2. Adicionar Novo Prato

Encontre a seção de cardápio (`#menu`) e copie este template:

```html
<div class="menu-card" data-aos="fade-up">
    <div class="card-icon">
        <i class="fas fa-icon-nome"></i> <!-- Mude o ícone -->
    </div>
    <h3>Nome do Novo Prato</h3>
    <p>Descrição deliciosa do prato aqui</p>
    <span class="card-badge">Categoria</span>
</div>
```

**Ícones disponíveis** (Font Awesome):
- `fa-drumstick-bite` - Frango
- `fa-steak` - Carne
- `fa-fire` - Fogo/Quente
- `fa-utensils` - Talheres
- `fa-bowl-food` - Tigela
- `fa-cheese` - Queijo
- `fa-beer` - Bebida
- `fa-pizza-slice` - Pizza

Consulte: https://fontawesome.com/icons

### 3. Remover Seções

Se não quiser uma seção (ex: Serviços), encontre e delete:

```html
<!-- Remova a seção inteira -->
<section class="services section-padding">
    <!-- ... todo conteúdo ... -->
</section>
```

### 4. Adicionar Novas Avaliações

Na seção `#reviews`, copie este template:

```html
<div class="review-card" data-aos="fade-up">
    <div class="review-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="review-text">"Sua avaliação aqui!"</p>
    <p class="review-author">- Nome do Cliente</p>
</div>
```

Para 4 estrelas:
```html
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="far fa-star"></i>  <!-- Última estrela vazia -->
```

---

## 🖼️ Adicionar Imagens

### 1. Adicionar Logo

Em `index.html`, no header, modifique:

```html
<div class="logo">
    <img src="caminho/para/logo.png" alt="Logo Fogareiro" style="height: 40px;">
</div>
```

### 2. Substituir Imagem de Placeholder

No `styles.css`, encontre `.image-placeholder`:

```css
.image-placeholder {
    background: url('caminho/para/imagem.jpg') center/cover;
    /* Remove os ícones */
}
```

Depois remova o ícone do HTML:

```html
<div class="image-placeholder">
    <!-- Delete: <i class="fas fa-utensils"></i> -->
</div>
```

### 3. Adicionar Imagens dos Pratos

No menu, modifique cada card:

```html
<div class="menu-card" data-aos="fade-up">
    <img src="imagens/prato.jpg" alt="Nome do prato" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
    <h3>Nome do Prato</h3>
    <!-- resto do card -->
</div>
```

---

## 🎬 Animações Avançadas

### 1. Alterar Velocidade de Animação

No `styles.css`:

```css
:root {
    --transition: all 0.3s ease; /* Mude de 0.3s para outro valor */
}
```

Opções: `0.1s` (rápido), `0.3s` (normal), `0.5s` (lento), `1s` (muito lento)

### 2. Criar Nova Animação

Adicione no `styles.css`:

```css
@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-in-left {
    animation: fadeInLeft 0.6s ease;
}
```

### 3. Adicionar Animação de Pulso

```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}
```

---

## 📱 Responsividade Customizada

### Adicionar Novo Breakpoint

No final do `styles.css`:

```css
/* Para tablets grandes */
@media (max-width: 1280px) {
    .menu-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Para sua customização */
@media (max-width: 600px) {
    .seu-elemento {
        font-size: 1rem;
    }
}
```

---

## 🔊 Adicionar Som/Efeitos

### Som ao Clicar em Botão

No `script.js`, adicione:

```javascript
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        // Toca um som (opcional)
        const audio = new Audio('caminho/para/som.mp3');
        audio.play();
    });
});
```

---

## 📧 Adicionar Formulário de Contato

### 1. Adicione no HTML (antes do footer):

```html
<section class="contact-form section-padding">
    <div class="container">
        <h2>Envie uma Mensagem</h2>
        <form id="contactForm" style="max-width: 600px; margin: 0 auto;">
            <input type="text" placeholder="Seu Nome" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
            <input type="email" placeholder="Seu Email" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px;">
            <textarea placeholder="Sua Mensagem" rows="5" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 5px; font-family: inherit;"></textarea>
            <button type="submit" class="btn-primary" style="width: 100%;">Enviar</button>
        </form>
    </div>
</section>
```

### 2. No `script.js`, adicione:

```javascript
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // Use Formspree ou similar
    fetch('https://formspree.io/f/seu-id', {
        method: 'POST',
        body: formData
    });
    
    showNotification('Mensagem enviada com sucesso!', 'success');
    e.target.reset();
});
```

---

## 🎯 Estratégias de Design

### 1. Tema Escuro

Adicione toggle no header e em `styles.css`:

```css
body.dark-mode {
    --text-dark: #f0f0f0;
    --light-bg: #2a2a2a;
    --white: #1a1a1a;
}
```

### 2. Modo Sazonalidade

Mude cores para datas especiais:

```javascript
const mes = new Date().getMonth();
if (mes === 11) { // Dezembro
    document.documentElement.style.setProperty('--primary-red', '#228B22');
}
```

### 3. Carrossel de Fotos

```html
<div class="carousel">
    <img src="img1.jpg" alt="1" class="carousel-img active">
    <img src="img2.jpg" alt="2" class="carousel-img">
    <button class="carousel-btn prev">❮</button>
    <button class="carousel-btn next">❯</button>
</div>
```

---

## 🚀 Otimizações Avançadas

### 1. Lazy Loading de Imagens

```html
<img src="placeholder.jpg" data-src="imagem-real.jpg" class="lazy" alt="Descrição">
```

### 2. Compressão de Imagens

Use ferramentas como:
- TinyPNG.com
- Compressor.io
- ImageOptim

### 3. Cache do Navegador

Adicione no servidor:
```
Cache-Control: max-age=31536000
```

---

## 🔐 Melhorias de Segurança

### 1. Validar Formulários

```javascript
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### 2. Sanitizar Entrada

```javascript
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
```

---

## 📊 Adicionar Analytics

### Google Analytics

```html
<!-- No final do </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');
</script>
```

### Rastreamento Customizado

```javascript
gtag('event', 'buttonClick', {
    'button_name': 'Ver Cardápio'
});
```

---

## 🎓 Exemplos Prontos

### Adicionar Ícone de Notificação

```html
<div style="position: fixed; bottom: 20px; right: 20px; z-index: 999;">
    <a href="https://wa.me/5544390034340" class="whatsapp-float" title="Chat com WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>

<style>
.whatsapp-float {
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
</style>
```

### Menu Sticky com Indicador

```javascript
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
```

---

## 🎁 Recursos Úteis

### Geradores Online
- **Gerador de Gradientes**: https://cssgradient.io
- **Paleta de Cores**: https://coolors.co
- **Ícones**: https://fontawesome.com
- **Fontes**: https://fonts.google.com

### Validadores
- **HTML**: https://validator.w3.org
- **CSS**: https://jigsaw.w3.org/css-validator
- **SEO**: https://www.seoptimer.com

### Performance
- **PageSpeed**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://www.webpagetest.org

---

## ❓ FAQ de Customização

**P: Como alterar a cor só de um botão?**
R: Adicione uma classe customizada: `.btn-custom { background: #cor; }`

**P: Como fazer uma seção full-width?**
R: Use `width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw;`

**P: Como adicionar parallax?**
R: Use `background-attachment: fixed;` no CSS

**P: Qual é o melhor tamanho de imagem?**
R: 1200x800px para header, 400x300px para cards

**P: Como fazer site multilíngue?**
R: Use bibliotecas como i18next.js

---

## 📞 Dicas Finais

1. **Sempre backup** - Guarde uma cópia antes de grandes alterações
2. **Teste tudo** - Verifique em diferentes navegadores
3. **Mobile first** - Comece pelo mobile, depois desktop
4. **Performance** - Não adicione muitos efeitos
5. **Consistência** - Mantenha um padrão visual

---

**Happy Customizing! 🎨**

Se tiver dúvidas, consulte a documentação ou comunidades online!
