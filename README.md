# 🔥 Fogareiro Paranavaí - Site Responsivo

## 📋 Sobre o Projeto

Site moderno, elegante e responsivo para o restaurante **Fogareiro Paranavaí**. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, oferecendo uma experiência visual e de navegação excelente em todos os dispositivos.

---

## 📁 Estrutura de Arquivos

```
site/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Interatividades JavaScript
└── README.md           # Este arquivo
```

---

## ✨ Recursos Principais

### 🎨 Design
- ✅ Layout moderno e minimalista
- ✅ Cores quentes (vermelho, laranja, preto)
- ✅ Fontes tipográficas profissionais
- ✅ Animações suaves e interativas
- ✅ Gradientes elegantes

### 📱 Responsividade
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Menu hamburger para dispositivos móveis
- ✅ Breakpoints otimizados
- ✅ Testes em múltiplas resoluções

### 🚀 Funcionalidades
- ✅ Menu de navegação fixo
- ✅ Scroll suave entre seções
- ✅ Animações ao visualizar elementos
- ✅ Botão "Voltar ao Topo"
- ✅ Links para contato (telefone, WhatsApp, Google Maps)
- ✅ Rastreamento de eventos
- ✅ Código bem comentado e organizado

---

## 🎯 Seções do Site

### 1. **Header** (Topo Fixo)
- Logo com ícone animado
- Menu de navegação responsivo
- Botão de contato direto
- Menu hambúrguer para mobile

### 2. **Hero Section** (Banner Principal)
- Frase chamativa
- Botão "Ver Cardápio"
- Fundo gradiente elegante
- Animação ao carregar

### 3. **Sobre o Restaurante**
- Descrição da churrascaria
- Informações: avaliação (4,2⭐), preço (R$ 40-60), localização, horário
- Grid de informações com ícones
- Imagem decorativa

### 4. **Cardápio**
- 8 pratos principais
- Cards com descrição e ícone
- Badges de categoria
- Efeitos hover interativos

### 5. **Serviços**
- Refeição no local
- Retirada na porta
- Entrega sem contato
- Cards com ícones coloridos

### 6. **Avaliações**
- 3 depoimentos de clientes
- Estrelas visuais (5/5)
- Feedback positivo
- Design elegante

### 7. **Contato**
- Endereço completo
- Telefone
- Horário de funcionamento
- Botões: Google Maps, Ligar, WhatsApp

### 8. **Footer**
- Links rápidos
- Redes sociais
- Informações da empresa
- Copyright

---

## 🔧 Como Usar

### 1. **Instalação Rápida**
Simplesmente abra o arquivo `index.html` no seu navegador. Não há dependências externas!

```bash
# Abrir no navegador (Windows)
start index.html

# Abrir no navegador (Mac)
open index.html

# Abrir no navegador (Linux)
xdg-open index.html
```

### 2. **Através de um Servidor Local** (Recomendado)

Se você tiver Python instalado:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Se você tiver Node.js instalado:
```bash
# Usando http-server
npx http-server
```

Depois, acesse: `http://localhost:8000`

### 3. **Usar com um Editor de Código**
- Abra a pasta em VS Code
- Use a extensão "Live Server"
- Clique com botão direito em `index.html` e escolha "Open with Live Server"

---

## 🎨 Personalização

### Alterar Cores

No arquivo `styles.css`, localize a seção `:root`:

```css
:root {
    --primary-red: #D32F2F;      /* Cor vermelha principal */
    --secondary-orange: #FF6B35;  /* Cor laranja secundária */
    --dark-bg: #1a1a1a;          /* Cor de fundo escuro */
    /* ... outras cores ... */
}
```

### Alterar Informações do Restaurante

No arquivo `index.html`, procure pelos valores:
- **Telefone**: `(44) 3900-3434`
- **Endereço**: `Shopping Cidade, Paranavaí - PR`
- **Horário**: `Aberto até 22:00`
- **Avaliações**: `4,2 estrelas (36 avaliações)`
- **Preço**: `R$ 40–60 por pessoa`

### Adicionar/Remover Pratos

No arquivo `index.html`, na seção `#menu`, copie um `.menu-card` e modifique:

```html
<div class="menu-card" data-aos="fade-up">
    <div class="card-icon">
        <i class="fas fa-drumstick-bite"></i>  <!-- Ícone -->
    </div>
    <h3>Nome do Prato</h3>
    <p>Descrição do prato</p>
    <span class="card-badge">Categoria</span>
</div>
```

### Adicionar Imagens Reais

Substitua o `.image-placeholder` por uma tag `<img>`:

```html
<img src="caminho/para/imagem.jpg" alt="Descrição" style="width: 100%; border-radius: 20px;">
```

---

## 🔗 Links e Funcionalidades

### Integração com WhatsApp
Os botões WhatsApp incluem mensagem pré-definida e número do restaurante.

### Integração com Google Maps
O link "Ver no Mapa" abre a localização diretamente no Google Maps.

### Telefone
Os botões de telefone iniciam uma chamada (em celulares) ou mostram o número para discagem manual.

---

## 📊 Estrutura CSS

O CSS está organizado em seções:

1. **Variáveis CSS** - Cores, espaçamentos, fontes
2. **Reset e Estilos Globais** - Configuração base
3. **Componentes** - Header, botões, cards, etc.
4. **Seções** - Estilos específicos de cada seção
5. **Animações** - Keyframes e transições
6. **Responsividade** - Media queries

---

## 📱 Pontos de Quebra (Breakpoints)

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: até 768px
- **Mobile Pequeno**: até 480px

---

## 🚀 Otimizações

### Performance
- ✅ CSS minificado em produção
- ✅ Lazy loading de imagens
- ✅ Uso de Font Awesome CDN
- ✅ Sem dependências pesadas

### SEO
- ✅ Meta tags estruturadas
- ✅ Semântica HTML5
- ✅ Headings organizados (H1, H2, H3)
- ✅ Atributos alt em imagens

### Acessibilidade
- ✅ Contraste de cores adequado
- ✅ Navegação por teclado
- ✅ Ícones com labels
- ✅ Estrutura semântica

---

## 🔐 Segurança

- ✅ Sem scripts maliciosos
- ✅ Código validado
- ✅ Links externos em abas novas
- ✅ Sem coleta de dados sensíveis

---

## 🐛 Solução de Problemas

### Site não abre
- Verifique se o arquivo `index.html` está no local correto
- Tente abrir em um navegador diferente
- Verifique se há erros no console (F12)

### Estilos não aparecem
- Certifique-se que `styles.css` está na mesma pasta
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique se há erros no console

### Menu não funciona no mobile
- Verifique se `script.js` está carregando
- Teste em um navegador diferente
- Abra o console e procure por erros

### Links não funcionam
- Verifique os números de telefone
- Certifique-se que tem acesso à internet
- Teste o link diretamente no navegador

---

## 📞 Contato do Restaurante

- **Nome**: Fogareiro Paranavaí
- **Telefone**: (44) 3900-3434
- **Endereço**: Shopping Cidade, R. Getúlio Vargas, 909
- **Cidade**: Paranavaí - PR, 87702-000
- **Horário**: Aberto até 22:00

---

## 📈 Estatísticas

- ✅ **4.2 estrelas** (36 avaliações)
- ✅ **Preço**: R$ 40–60 por pessoa
- ✅ **8 pratos** principais no cardápio
- ✅ **3 serviços** disponíveis
- ✅ **3 avaliações** de clientes

---

## 💡 Dicas

1. **Backup**: Sempre mantenha uma cópia dos arquivos originais
2. **Teste**: Visualize em diferentes navegadores e dispositivos
3. **Otimização**: Use ferramentas como Google PageSpeed Insights
4. **Atualizações**: Mantenha o Font Awesome e outras bibliotecas atualizadas
5. **Domínio**: Considere registrar um domínio próprio
6. **Hospedagem**: Use plataformas como Netlify, Vercel ou GitHub Pages para hospedar

---

## 🎓 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
- **JavaScript** - Interatividades
- **Font Awesome 6.4** - Ícones
- **Google Fonts** - Tipografia
- **Responsivo** - Mobile First

---

## 📄 Licença

Este projeto é de uso livre para o restaurante Fogareiro Paranavaí.

---

## ✉️ Suporte

Para dúvidas ou melhorias, entre em contato pelo telefone:
**(44) 3900-3434**

---

**Desenvolvido com ❤️ para o Fogareiro Paranavaí**

Versão: 1.0.0  
Última atualização: 2024
"# Fogareiro-Paranava-" 
