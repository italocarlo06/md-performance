# MD Performance · Site

Landing page da **MD Performance**, academia com acompanhamento personalizado em Arapiraca/AL.
Feita em [Next.js](https://nextjs.org) (App Router), pronta para publicar na [Vercel](https://vercel.com).

## Rodar no computador

Requer Node.js 20.9 ou mais recente.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar o conteúdo

Quase todo o conteúdo fica em **`lib/site.ts`**:

| O que | Onde em `lib/site.ts` |
| --- | --- |
| WhatsApp, e-mail, Instagram, YouTube | `site` |
| Endereço, horários, link e mapa do Google | `site.address`, `site.hours`, `site.mapsLink`, `site.mapsEmbed` |
| Preços dos planos (2x, 3x, 4x × trimestral, semestral, anual) | `plans[].prices` |
| Equipe (nome, cargo, CREF, foto, especialidades) | `team` |
| Depoimentos | `testimonials` |
| Perguntas frequentes | `faq` |
| CNPJ e responsável técnico | `site.legal` |

Itens entre colchetes, como `[R$ 000]`, ainda precisam ser preenchidos.

Imagens e vídeo ficam em `public/images` e `public/video`. Cores, fontes e efeitos ficam em `app/globals.css`
(a cor de destaque é a variável `--accent`).

## Publicar na Vercel

1. Entre em https://vercel.com com a sua conta do GitHub.
2. Clique em **Add New… › Project** e importe este repositório.
3. Mantenha as configurações detectadas (Framework: Next.js) e clique em **Deploy**.
4. Para usar um domínio próprio, vá em **Settings › Domains** no projeto. Depois, atualize `site.url` em `lib/site.ts`.

Cada novo commit na branch `main` publica uma nova versão automaticamente.
