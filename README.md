# Góes Notícias

Site de notícias do **Colégio Estadual Góes Calmon**: notícias, eventos, informativos e os projetos dos alunos, tudo num lugar só.

🔗 **Site no ar:** [https://goesnoticias-site.vercel.app/](https://goesnoticias-site.vercel.app/)

## Tecnologias

| O quê | Pra quê |
| --- | --- |
| [Astro](https://astro.build) | Framework do site. Gera páginas estáticas, rápidas e boas pra SEO |
| [Tailwind CSS](https://tailwindcss.com) | Estilização |
| [TypeScript](https://www.typescriptlang.org) | Tipagem do código |
| [Sanity](https://www.sanity.io) | CMS: painel onde professores escrevem e publicam as notícias |
| `@sanity/client` e `@sanity/image-url` | Buscar as notícias e montar as URLs das imagens |
| `astro-portabletext` | Renderizar o texto das notícias (Portable Text) |
| `@astrojs/rss` | Feed RSS |
| [Vercel](https://vercel.com) | Hospedagem e deploy automático |
| Node.js, npm, Git e GitHub | Ambiente de desenvolvimento e versionamento |

## Como funciona

1. Quem publica entra no **Sanity Studio**, escreve a notícia e clica em **Publish**.
2. Um webhook do Sanity chama um **Deploy Hook** da Vercel.
3. A Vercel reconstrói o site, que busca as notícias no Sanity, e a mudança vai ao ar em cerca de 1 a 2 minutos.

## Categorias

Cada notícia pertence a uma categoria, e cada uma tem sua página em `/categoria/<chave>`:

| Chave | Nome |
| --- | --- |
| `noticia` | Notícias |
| `evento` | Eventos |
| `informativo` | Informativos |
| `projeto` | Projeto dos Alunos |

As chaves ficam em `src/consts.ts` e precisam ser as mesmas definidas no Sanity Studio.

## Rodando localmente

Pré-requisito: **Node.js 20 ou superior** (LTS).

```bash
git clone https://github.com/MM-Damasceno/goesnoticias_site.git
cd goesnoticias_site
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site pronto em `dist/` |
| `npm run preview` | Testa localmente o resultado do build |

## Estrutura do projeto

```text
src/
├── components/   # Cabeçalho, rodapé, data formatada, BaseHead
├── layouts/      # BlogPost.astro: molde da página de uma notícia
├── lib/
│   └── sanity.ts # Conexão com o Sanity e funções que buscam as notícias
├── pages/
│   ├── index.astro               # Home com destaque e últimas notícias
│   ├── about.astro               # Página Sobre
│   ├── blog/index.astro          # Todas as notícias
│   ├── blog/[...slug].astro      # Página de cada notícia
│   ├── categoria/[categoria].astro # Notícias por categoria
│   └── rss.xml.js                # Feed RSS
├── styles/       # CSS global e Tailwind
├── assets/       # Imagens do site
└── consts.ts     # Título, descrição e categorias
```

## Conectando ao Sanity

A conexão fica em `src/lib/sanity.ts` (`projectId` e `dataset`). O **Sanity Studio** (o painel de edição) fica em um projeto separado, fora deste repositório, e é publicado com:

```bash
npx sanity deploy
```

## Deploy

O site é publicado na **Vercel**, conectada a este repositório. Cada `git push` na branch `main` gera um novo deploy automaticamente.