# Presentaciones de Programación de Sistemas Web

Aplicación React que reúne el material visual de la materia. Incluye una portada,
navegación responsive y presentaciones construidas con Reveal.js y componentes
TSX.

## Stack

- React 19 y TypeScript
- Vite 8
- React Router 7
- Tailwind CSS 4
- `@revealjs/react` y Reveal.js 6
- Heroicons

## Desarrollo local

Desde esta carpeta instala las dependencias y levanta Vite:

```bash
npm install
npm run dev
```

La aplicación incluye también estos comandos de verificación:

```bash
npm run lint
npm run build
npm run preview
```

## Estructura relevante

```text
src/
├── config/          # Catálogo único de presentaciones y rutas
├── pages/           # Portada y página no encontrada
├── presentations/   # Decks Reveal escritos como componentes TSX
├── shared/           # Componentes reutilizables del shell y los decks
└── types/            # Contratos TypeScript compartidos
```

Para añadir una presentación, crea su componente dentro de `src/presentations/`
y registra sus metadatos, ruta, icono y componente en
`src/config/presentations.ts`. La portada, el sidebar y React Router consumen ese
mismo catálogo.

## Cloudflare Pages

Conecta el repositorio desde el panel de Cloudflare Pages y utiliza:

| Opción | Valor |
| --- | --- |
| Root directory | `docs/presentations` |
| Build command | `npm run build` |
| Build output directory | `dist` |

No se debe agregar un `404.html` estático en la raíz del resultado. Cloudflare
Pages reconocerá el proyecto como SPA y enviará las rutas desconocidas a
`index.html`; React Router mostrará después la vista 404 interna cuando
corresponda.

Referencias oficiales:

- [SPA rendering en Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Configuración de monorepos](https://developers.cloudflare.com/pages/configuration/monorepos/)
