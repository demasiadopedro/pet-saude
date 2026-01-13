# 🏥 PET Saúde Digital - UFOPA

Portal oficial do **Programa de Educação pelo Trabalho para a Saúde (PET Saúde)** da Universidade Federal do Oeste do Pará (UFOPA). Este projeto conecta tecnologia e saúde, focando na melhoria do atendimento no SUS em Santarém e região.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-orange)
![Tech](https://img.shields.io/badge/Tech-Astro_|_React_|_Tailwind-blue)

## 🚀 Tecnologias Utilizadas

Este projeto foi modernizado para utilizar as tecnologias mais recentes de desenvolvimento web, focando em performance (SSG) e experiência do desenvolvedor.

- **[Astro](https://astro.build/):** Framework principal (Static Site Generation).
- **[Tailwind CSS v4](https://tailwindcss.com/):** Estilização utilitária e design system.
- **[React](https://react.dev/):** Biblioteca para componentes interativos (ex: Carrossel).
- **[Shadcn UI](https://ui.shadcn.com/):** Biblioteca de componentes reutilizáveis e acessíveis.
- **[Embla Carousel](https://www.embla-carousel.com/):** Motor do carrossel da Home.

## 🎨 Identidade Visual

O projeto utiliza uma paleta de cores personalizada baseada na identidade visual do PET Saúde UFOPA, configurada via variáveis CSS modernas e Tailwind.

| Cor | Variável CSS | Hex |
| :--- | :--- | :--- |
| **Azul Escuro** | `--cor-azul-escuro` | `#022D77` |
| **Azul Petróleo** | `--cor-azul-petroleo` | `#1D81BD` |
| **Azul Claro** | `--cor-azul-claro` | `#4DBFFF` |
| **Laranja** | `--cor-laranja` | `#FC380F` |
| **Cinza Claro** | `--cor-cinza-claro` | `#DBE3E3` |

A fonte padrão utilizada é a **Ubuntu**.

## 📂 Estrutura do Projeto

```text
├── public/                 # Arquivos estáticos (imagens, favicons)
├── src/
│   ├── assets/             # Imagens otimizadas pelo Astro
│   ├── components/         # Componentes reutilizáveis (.astro e .tsx)
│   │   ├── ui/             # Componentes do Shadcn (React)
│   │   └── ...             # Header, Footer, Cards
│   ├── content/            # CMS baseado em arquivos Markdown
│   │   ├── blog/           # Postagens de notícias
│   │   └── gats/           # Dados dos Cenários (GATs)
│   ├── layouts/            # Layouts base (BaseHead, BlogPost)
│   ├── pages/              # Rotas do site
│   │   ├── blog/           # Listagem e slug do blog
│   │   ├── cenarios/       # Listagem e slug dos GATs
│   │   └── ...
│   └── styles/             # CSS Global (Tailwind config)
├── astro.config.mjs        # Configuração do Astro + Integrações
└── package.json