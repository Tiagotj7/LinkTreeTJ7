# 🌐 LinkBio Premium

Transforme sua bio em uma verdadeira vitrine digital.

O **LinkBio Premium** foi criado para quem deseja reunir todos os seus principais links em uma única página elegante, moderna e intuitiva. Ideal para criadores de conteúdo, desenvolvedores, freelancers, empresas e profissionais que desejam fortalecer sua presença online e oferecer uma experiência mais profissional aos visitantes.

Com um design sofisticado, visual minimalista e animações suaves, sua página transmite credibilidade e facilita o acesso ao seu portfólio, redes sociais, projetos, currículo e formas de contato.

---

## 🚀 Como replicar este projeto

O projeto é um site estático (HTML, CSS e JavaScript puros). Não há build, framework nem dependências para instalar: basta editar os arquivos e publicar.

### 1. Clone o repositório

```bash
git clone https://github.com/Tiagotj7/LinkTreeTJ7.git
cd LinkTreeTJ7
```

Se preferir, use o botão **Fork** no GitHub para ter uma cópia na sua conta.

### 2. Estrutura de arquivos

```
LinkTreeTJ7/
├── index.html        # Conteúdo da página: perfil, links e metadados
├── style.css         # Estilos (cores, layout, animações)
├── script.js         # Partículas de fundo, brilho nos botões e animação de entrada
└── assets/
    ├── profile.jpg   # Sua foto de perfil
    └── favicon.ico   # Ícone da aba do navegador
```

### 3. Teste localmente

Abra o `index.html` direto no navegador ou, se quiser um servidor local:

```bash
# com Python
python3 -m http.server 5500

# ou com Node
npx serve .
```

Depois acesse `http://localhost:5500`.

### 4. Personalize

**Perfil e textos** (`index.html`)

- Troque o `<title>` e as meta tags `description`, `author` e `og:*` pelos seus dados.
- Altere o nome dentro do `<h1>` (a parte em `<span>` recebe a cor de destaque), a profissão e as tags (`Projetos`, `IA`, `Cybersecurity`).
- Ajuste o texto do rodapé (`© 2026 Tiago Carvalho`).

**Foto e favicon** (`assets/`)

- Substitua `profile.jpg` por sua foto, mantendo o nome do arquivo (ou atualize o `src` no HTML). Uma imagem quadrada, com cerca de 400×400 px, funciona bem.
- Substitua o `favicon.ico` pelo seu ícone.

**Links**

Cada link é um bloco como este dentro de `<section class="links">`:

```html
<a href="https://www.tiktok.com/@seu_usuario"
    target="_blank"
    rel="noopener noreferrer">

    <div class="left">
        <i class="fab fa-tiktok"></i>
        <span>TikTok</span>
    </div>

    <i class="fa-solid fa-chevron-right"></i>

</a>
```

- Para **adicionar** um link, copie o bloco, troque o `href`, o ícone e o texto.
- Para **remover**, apague o bloco inteiro.
- Para **reordenar**, mova os blocos de lugar.
- Ícones de redes sociais usam `fab fa-nome` (`fa-github`, `fa-linkedin`, `fa-instagram`, `fa-youtube`, `fa-x-twitter`, `fa-whatsapp`). Ícones gerais usam `fa-solid fa-nome`. A lista completa está em [fontawesome.com/icons](https://fontawesome.com/icons).
- No link de **Contato**, troque o e-mail e o assunto no `mailto:`.

**Cores e visual** (`style.css` e `script.js`)

- Fundo, cores de destaque e tamanhos ficam no `style.css`.
- A cor e a quantidade das partículas ficam no início do `script.js` (`color`, `number.value`). O azul padrão é `#3b82f6`.

### 5. Publique gratuitamente

Qualquer hospedagem de sites estáticos serve:

| Plataforma | Como publicar |
|---|---|
| **GitHub Pages** | No repositório, vá em *Settings → Pages*, escolha a branch `main` e a pasta `/ (root)`, e salve. O site fica em `https://seu-usuario.github.io/nome-do-repo/`. |
| **Vercel** | Em [vercel.com](https://vercel.com), importe o repositório. Não precisa configurar build; o deploy é automático a cada `git push`. |
| **Netlify** | Em [netlify.com](https://netlify.com), importe o repositório ou arraste a pasta do projeto. |

### 6. Dicas finais

- Use o link publicado na bio do Instagram, TikTok, LinkedIn e demais redes.
- Se for compartilhar o link em redes sociais, use uma URL absoluta no `og:image` (por exemplo, `https://seu-site.com/assets/profile.jpg`) para a prévia aparecer corretamente.
- O projeto carrega Google Fonts, Font Awesome e particles.js por CDN, então precisa de internet para exibir tudo como no original.

---

## ✨ Destaques

- 🎨 Design moderno e elegante
- 📱 Totalmente responsivo
- ⚡ Navegação rápida e intuitiva
- 🌙 Visual premium com tema escuro
- 🔗 Centralize todos os seus links em um único lugar
- 💼 Ideal para Instagram, TikTok, LinkedIn, X e outras redes sociais
- 🚀 Perfeito para destacar sua marca pessoal ou profissional

---

## 💡 Ideal para

- Desenvolvedores
- Designers
- Criadores de Conteúdo
- Freelancers
- Empreendedores
- Empresas
- Influenciadores Digitais
- Profissionais que desejam fortalecer sua presença online

---

## 🌟 Destaque-se na internet

Sua bio é, muitas vezes, o primeiro contato que as pessoas têm com você. Cause uma excelente impressão com uma página organizada, profissional e visualmente impactante.

Centralize seus principais canais, facilite o acesso ao seu conteúdo e fortaleça sua identidade digital com uma experiência que transmite confiança e profissionalismo.

---

### ⭐ Se este projeto foi útil para você, deixe uma estrela no repositório e compartilhe com outras pessoas!
