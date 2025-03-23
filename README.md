This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev# SkyCast

## 📌 Visão Geral
SkyCast é um projeto construído em **Next.js** que tem como objetivo exibir previsões do tempo de forma interativa e responsiva. 
Utiliza **React**, **TypeScript**, **Styled Components** e consome dados de uma API de previsão do tempo.

## 🔧 Tecnologias Utilizadas
- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)

---
## 🚀 Configuração do Ambiente

### 📂 **1. Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/sky-cast.git
cd sky-cast
```

### 📦 **2. Instalar Dependências**
```bash
npm install
```
Se houver conflitos de dependências, tente:
```bash
npm install --legacy-peer-deps
```

### ▶️ **3. Rodar o Projeto**
```bash
npm run dev
```
Acesse: [http://localhost:3000](http://localhost:3000)

---
## ⚠️ Erros Encontrados e Soluções

### ❌ Erro 1: `ERESOLVE unable to resolve dependency tree`
- **Causa**: O `react-query` não suporta `react@19`, mas o projeto estava com `react@19.0.0`.
- **Solução**: Alteramos `react` para `18.3.1` no `package.json`.
```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-query": "^3.39.3"
}
```
- Rodamos novamente:
```bash
npm install
```

### ❌ Erro 2: `Command executed now took 1.051s and failed Exit Code 1`
- **Causa**: Conflito no ambiente do Git Bash.
- **Solução**: Rodamos o comando no terminal do **Visual Studio Code** (cmd/powershell).
```bash
npm run dev
```

---
## 📁 Estrutura do Projeto

```
sky-cast/
│-- node_modules/
│-- public/            # Arquivos estáticos (imagens, ícones, etc.)
│-- src/
│   ├── app/           # Páginas do Next.js App Router
│   │   ├── layout.tsx # Layout global
│   │   ├── page.tsx   # Página inicial
│   ├── components/    # Componentes reutilizáveis
│   ├── styles/        # Estilos globais
│-- .gitignore         # Arquivos ignorados pelo Git
│-- package.json       # Dependências e scripts
│-- tsconfig.json      # Configuração do TypeScript
│-- next.config.js     # Configurações do Next.js
│-- README.md          # Documentação do projeto
```

---
## 🔜 Próximos Passos
1. **Criar a API para buscar previsão do tempo** usando OpenWeather.
2. **Criar componentes** como **Card de Previsão** e **Gráfico de Temperatura**.
3. **Configurar o sistema de buscas** para o usuário inserir cidades.
4. **Fazer o deploy** na Vercel ou outro provedor.

---
**🎯 Projeto em desenvolvimento.** Siga para mais atualizações! 🚀
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
