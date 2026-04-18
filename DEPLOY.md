# 🚀 Guia de Deployment - Fogareiro Paranavaí

## Hospedando seu site online em minutos!

Este guia mostra várias formas de hospedar o site do Fogareiro Paranavaí gratuitamente ou com baixo custo.

---

## ✅ Opção 1: Netlify (RECOMENDADO - Gratuito)

### 1.1 Prepare os arquivos
- Certifique-se que tem os 3 arquivos:
  - `index.html`
  - `styles.css`
  - `script.js`

### 1.2 Criar conta Netlify
1. Acesse: https://app.ne   tlify.com
2. Clique em "Sign up"
3. Use sua conta Google ou crie uma conta

### 1.3 Upload do site
**Opção A - Drag and Drop:**
1. Selecione as 3 pastas/arquivos
2. Arraste para o Netlify
3. Pronto! Seu site está online em minutos

**Opção B - Via Git (GitHub):**
1. Faça upload para GitHub
2. Conecte seu repositório ao Netlify
3. Deploy automático a cada atualização

### 1.4 Usar domínio próprio
1. Compre um domínio em:
   - Google Domains
   - Namecheap
   - HostGator
   
2. No Netlify, vá em "Domain settings"
3. Adicione seu domínio personalizado
4. Siga as instruções de DNS

**Resultado**: Site estará em: `fogareiroparnavaí.netlify.app`

---

## ✅ Opção 2: Vercel (Gratuito)

### 2.1 Criar conta
1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Use GitHub, GitLab ou email

### 2.2 Deploy
1. Clique em "New Project"
2. Selecione seu repositório Git
3. Clique em "Deploy"

### 2.3 Domínio
1. Vá em "Settings" → "Domains"
2. Adicione seu domínio personalizado

**Resultado**: Site estará em: `fogareiro.vercel.app`

---

## ✅ Opção 3: GitHub Pages (Gratuito)

### 3.1 Criar repositório
1. Vá para: https://github.com/new
2. Nome: `fogareiro-paranavaí`
3. Clique em "Create repository"

### 3.2 Upload arquivos
1. Clique em "Add file" → "Upload files"
2. Selecione seus 3 arquivos
3. Faça commit

### 3.3 Ativar GitHub Pages
1. Vá em "Settings" → "Pages"
2. Em "Source", selecione "main" branch
3. Clique em "Save"

**Resultado**: Site estará em: `username.github.io/fogareiro-paranavaí`

---

## ✅ Opção 4: Hospedagem Tradicional (Pago - Recomendado para negócio)

### Provedores recomendados:
- **Hostinger** - R$ 20-50/mês
- **Bluehost** - R$ 30-100/mês
- **HostGator** - R$ 25-80/mês
- **SiteGround** - R$ 40-150/mês

### Como fazer upload:
1. Acesse o painel de controle
2. Procure por "File Manager"
3. Navegue até a pasta `public_html`
4. Upload dos arquivos HTML, CSS, JS

---

## 🌐 Registrar Domínio Personalizado

### Opção A: Google Domains
1. Acesse: https://domains.google/intl/pt-BR/
2. Procure: "fogareiro.com.br"
3. Clique em "Adicionar ao carrinho"
4. Complete o pagamento
5. Conecte ao seu provedor de hospedagem

### Opção B: Namecheap
1. Acesse: https://www.namecheap.com
2. Procure o domínio desejado
3. Adicione ao carrinho
4. Faça checkout
5. Configure DNS

### Opção C: HostGator
1. Acesse: https://www.hostgator.com.br
2. Procure o domínio
3. Adicione à hospedagem
4. Domínio incluso no plano

---

## 📋 Checklist pré-deployment

Antes de publicar seu site:

- [ ] Todos os links funcionam (telefone, WhatsApp, Maps)
- [ ] Site responsivo em mobile e desktop
- [ ] Sem erros no console (F12)
- [ ] Imagens carregam corretamente
- [ ] Menu hamburger funciona no mobile
- [ ] Fontes carregam corretamente
- [ ] Animações funcionam
- [ ] Velocidade aceitável (testar em PageSpeed Insights)
- [ ] Meta tags corretas (title, description)
- [ ] Favicon definido (opcional)

---

## 🔧 Otimizações Antes do Deploy

### Adicionar Favicon
No `<head>` do `index.html`:
```html
<link rel="icon" type="image/png" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>">
```

### Melhorar SEO
No `<head>`:
```html
<meta name="description" content="Fogareiro Paranavaí - Churrascaria tradicional com os melhores pratos em Paranavaí">
<meta name="keywords" content="churrascaria, restaurante, paranavaí, comida brasileira">
<meta name="author" content="Fogareiro Paranavaí">
<meta property="og:title" content="Fogareiro Paranavaí">
<meta property="og:description" content="Melhor churrascaria de Paranavaí">
<meta property="og:image" content="URL-DA-IMAGEM">
```

### Google Analytics
Adicione no final do `<body>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

---

## 🔒 Segurança

### HTTPS (Essencial!)
- ✅ Netlify: Automaticamente
- ✅ Vercel: Automaticamente
- ✅ GitHub Pages: Automaticamente
- ✅ Hospedagem: Solicite certificado SSL grátis

### Proteção de dados
- Não salve dados sensíveis no HTML
- Use formulários com backend seguro
- Valide dados no servidor

---

## 📊 Monitorar Performance

### Ferramentas gratuitas:
1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev
   
2. **GTmetrix**
   - https://gtmetrix.com
   
3. **Lighthouse** (Chrome)
   - F12 → Lighthouse → Gerar relatório

### Métricas importante:
- Tempo de carregamento: < 3 segundos
- Performance: > 80
- SEO: > 90
- Acessibilidade: > 85

---

## 🚀 CI/CD (Deploy Automático)

### Com GitHub + Netlify
1. Faça push para GitHub
2. Netlify publica automaticamente
3. Sem necessidade de fazer upload manual

```bash
# Fluxo básico:
git add .
git commit -m "Atualizar site"
git push origin main
# Pronto! Deploy automático
```

---

## 🆚 Comparação de Plataformas

| Plataforma | Preço | Facilidade | Velocidade | SSL |
|-----------|-------|-----------|-----------|-----|
| Netlify | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| Vercel | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| GitHub Pages | Grátis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| Hostinger | R$25 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| Bluehost | R$30 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |

---

## 📱 Publicitar o Site

Após hospedar:

### 1. Google My Business
- Registre seu restaurante
- Adicione fotos e informações
- Apareça no Google Maps

### 2. Redes Sociais
- Facebook
- Instagram
- TikTok
- LinkedIn

### 3. Diretórios Online
- Google Maps
- iFood (se fizer delivery)
- Guia de Negócios PR

### 4. WhatsApp Business
- Adicione link do site ao WhatsApp
- Use mensagens automáticas

---

## 🎯 Próximos Passos

1. **Escolha uma plataforma** (recomendo Netlify)
2. **Registre seu domínio**
3. **Faça upload do site**
4. **Teste tudo**
5. **Monitore performance**
6. **Atualize conteúdo regularmente**

---

## ❓ FAQ

**P: Qual é a melhor opção?**
R: Netlify para iniciantes, hospedagem tradicional para negócios sérios.

**P: Preciso de banco de dados?**
R: Não para este site estático. Se precisar de formulários, use Formspree ou Netlify Forms.

**P: Posso usar WordPress?**
R: Sim, mas é mais complexo. Este HTML puro é mais rápido e seguro.

**P: Como criar email profissional?**
R: Use Google Workspace ou ProtonMail com seu domínio.

**P: Quanto custa tudo?**
R: Grátis no Netlify, ou R$50-100/mês com hospedagem + domínio.

---

## 📞 Suporte

Se tiver dúvidas:
- Consulte a documentação oficial
- Procure tutoriais no YouTube
- Entre em contato com suporte do provedor

---

**Bom deployment! 🚀**

Seu site Fogareiro Paranavaí estará online em breve!
