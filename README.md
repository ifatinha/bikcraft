# 🚴‍♀️ Bikcraft

[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/Style-CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/Markup-HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github)](https://ifatinha.github.io/bikcraft/)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://github.com/ifatinha/bikcraft)

---
## 🇧🇷 **Descrição (Português)**

Bikcraft é um projeto de site institucional moderno desenvolvido para apresentar uma marca fictícia de bicicletas artesanais.  
O foco está em **design minimalista**, **performance otimizada** e **organização profissional de código** usando ferramentas do ecossistema JavaScript.

---

## 🌐 Demonstração

🔗 [Acesse o projeto online](https://ifatinha.github.io/bikcraft/)  
_(link será funcional após publicar com `gh-pages`)_

---

## 🎯 Objetivo do Projeto

O projeto foi criado com o propósito de:

- Aplicar conceitos modernos de desenvolvimento web com **Webpack**, **Babel** e **npm**;
- Demonstrar organização modular com **ES Modules** e **CommonJS**;
- Criar um site rápido, otimizado e fácil de manter;
- Servir como base para estudos e portfólio.

---

## 🧩 Tecnologias Utilizadas

| Tecnologia                       | Função                                                  |
| -------------------------------- | ------------------------------------------------------- |
| **HTML5**                        | Estrutura das páginas e semântica.                      |
| **CSS3 (moderno e minimalista)** | Estilo e layout responsivo.                             |
| **JavaScript ES6+**              | Interações dinâmicas e animações.                       |
| **Webpack**                      | Empacotamento, otimização e build automático.           |
| **Babel**                        | Compatibilidade de código ES6+ com navegadores antigos. |
| **npm scripts**                  | Automação de tarefas (`start`, `build`, `deploy`).      |
| **gh-pages**                     | Publicação direta no GitHub Pages.                      |

---

## 🧱 Estrutura do Projeto

```
📦 bikcraft/
┣ 📂 src/
┃ ┣ 📂 css/ # Arquivos de estilo (importados pelo JS)
┃ ┣ 📂 js/ # Código JS modular (plugins, scripts, etc.)
┃ ┣ 📂 img/ # Imagens e ícones otimizados
┃ ┗ 📜 index.html # Página principal do site
┣ 📂 dist/ # Código empacotado (gerado automaticamente)
┣ 📜 package.json
┣ 📜 webpack.config.cjs
┣ 📜 .gitignore
┗ 📜 README.md
```

---

## ⚙️ Como Rodar o Projeto Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ifatinha/bikcraft.git
   ```

2. **Entre na pasta:**

```
cd bikcraft
```

3. **Instale as dependências**

```
npm install
```

4. **Inicie o servidor local (modo desenvolvimento)**

```
npm start
```

O projeto será aberto automaticamente em http://localhost:8080

5. **Gerar versão de produção (otimizado)**

```
npm run build
```

Os arquivos finais estarão disponíveis na pasta /dist.

---

## 🚀 Publicando no GitHub Pages

1. No terminal, execute:

```
npm run deploy
```

2. O projeto será publicado automaticamente em:
   👉 https://ifatinha.github.io/bikcraft/

---

## 💡 Funcionalidades do Projeto

- Navegação com menu ativo dinâmico;
- Galeria de imagens interativa com troca de posições;
- Sistema de perguntas frequentes com acessibilidade (ARIA);
- Marcação automática de produtos via parâmetros na URL;
- Animações simples e leves controladas via JavaScript;
- Build otimizado com cache busting (\[contenthash\]).

---

## 🧠 Conceitos aplicados

- **Rest Parameters**
- **Optional Chaining**
- **Nullish Coalescing**
- **CommonJS e ES Modules**
- **npm e npx**
- **Babel e Webpack**
- **Webpack Dev Server**
- **Deploy com gh-pages**

## 🧑‍💻 Desenvolvido por

👩‍💻 Fatinha
[💼 GitHub - @ifatinha](https://github.com/ifatinha)

---

## 📝 Licença

Este projeto está sob a licença [MIT License](./LICENSE).

Você pode usar, copiar, modificar e distribuir este projeto livremente, desde que mantenha os créditos à autora original:

**© 2025 Fatinha** — todos os direitos reservados sob os termos da licença MIT.
