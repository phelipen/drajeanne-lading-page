# Dra. Jeanne Menezes

Landing page em Astro 5, Tailwind CSS 4 e JavaScript, com fotos e fontes locais, carrossel, depoimentos, WhatsApp, Instagram e Google Maps.

A seção “Beleza com responsabilidade” foi removida nesta entrega. O mapa permanece imediatamente antes do rodapé.

## Publicar pelo GitHub na Vercel

1. Extraia o ZIP.
2. Crie um repositório no GitHub e envie o conteúdo da pasta `jeanne-menezes`. O arquivo `package.json` deve ficar na raiz do repositório. Não envie o ZIP como um único arquivo.
3. Na Vercel, crie um projeto e importe o repositório.
4. Confira: Framework **Astro**, Root Directory na raiz, instalação `npm ci`, build `npm run build` e saída `dist`.
5. Publique. O arquivo `vercel.json` já fornece as configurações de build.

Se mantiver a pasta `jeanne-menezes` dentro do repositório, selecione-a como Root Directory.
Não é necessário banco de dados, chave de API ou adaptador de servidor.

## Executar localmente

Use Node.js 22 LTS ou 24 LTS com npm.

```bash
npm ci
npm run dev
```

Para compilar e conferir:

```bash
npm run build
npm run preview
```

## Editar

- `src/pages/index.astro`: textos, avaliações, galeria, contatos e estrutura.
- `src/styles/global.css`: cores, fontes, layout e transições.
- `public/images/`: fotos.
- `public/fonts/`: fontes locais.
- `public/favicon.svg`: ícone do site.

Os cinco depoimentos foram transcritos dos prints fornecidos. A nota 5,0 e as 33 avaliações são estáticas, com referência de 08/10/2026. Atualize esses dados em `index.astro`.

## Domínio

A configuração usa o endereço de produção fornecido pela Vercel para a imagem de compartilhamento. Para domínio próprio, pode definir a variável opcional `SITE_URL` com o endereço completo (ex.: `https://www.seudominio.com.br`) e fazer novo deploy.

Google Maps, WhatsApp, Instagram e o link de avaliações dependem de serviços externos.

O ZIP inclui código-fonte, imagens e fontes. Dependências (`node_modules`), arquivos gerados (`dist`) e configurações da hospedagem anterior não são incluídos. A Vercel instala as dependências e compila o projeto pelo lockfile.

Documentação: https://docs.astro.build/en/guides/deploy/vercel/
