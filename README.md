# Portfólio — Victor Poiani

Portfólio pessoal construído com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS v4**.

## Rodar localmente

Pré-requisito: Node.js `^20.19` ou `>=22.12`.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento            |
| `npm run build`   | Build de produção em `dist/`           |
| `npm run preview` | Serve o build localmente               |
| `npm run lint`    | Checagem de tipos (`tsc --noEmit`)     |
| `npm test`        | Testes dos dados do portfólio          |

## Onde editar o conteúdo

Todo o texto (projetos, trajetória, habilidades, contatos) fica em
[`src/data/portfolioData.ts`](src/data/portfolioData.ts).

- **Imagens:** coloque em `src/assets/images/` e referencie com
  `new URL('../assets/images/arquivo.webp', import.meta.url).href`.
  Não use caminhos como `"/src/assets/..."`: eles funcionam no `npm run dev`,
  mas **não entram no build de produção**.
- **Links de projeto:** `githubUrl` e `liveUrl` são opcionais; omita o que não existir.

## Deploy (GitHub Pages)

1. No repositório: **Settings → Pages → Source: GitHub Actions**.
2. Faça push na branch `main`. O workflow `.github/workflows/deploy.yml` roda
   type-check, testes e build, e publica `dist/`.

O Dependabot (`.github/dependabot.yml`) abre PRs semanais de atualização de
dependências e mensais para as GitHub Actions.
