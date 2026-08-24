# Guía del proyecto de presentaciones

Esta guía aplica exclusivamente a `docs/presentations`. Debe compartirse o
referenciarse en las conversaciones que involucren la creación o modificación de
presentaciones de clase.

## Contexto técnico

El proyecto es una aplicación de React con TypeScript, Vite y Reveal.js. Las
presentaciones son componentes TSX ubicados en `src/presentations`. El catálogo
centralizado en `src/config/presentations.ts` registra los metadatos, rutas,
iconos y componentes que utiliza la aplicación.

Para agregar una presentación, el agente debe crear o actualizar el componente
correspondiente en `src/presentations` y registrarlo en ese catálogo, sin romper
la arquitectura existente.

## Estilo visual

- `src/index.css` es la única fuente de verdad de la paleta de colores,
  tipografías, proporciones, espaciados y estilos de las presentaciones.
- Este archivo no se modifica. Se deben reutilizar sus clases, tokens y patrones
  visuales existentes; no se crean paletas, estilos base ni alternativas visuales
  paralelas.
- Se conserva el formato de presentación de Reveal.js, incluido su tratamiento
  visual existente para portadas, contenido, código, tarjetas y navegación.
- No se usan emojis.
- Todo texto mantiene un registro formal: no se utiliza lenguaje informal ni
  jerga juvenil.
- Cuando se requieran iconos, se usan exclusivamente los componentes de
  `@heroicons/react`, ya instalados en el proyecto.

## Alcance del agente

El agente puede implementar e integrar presentaciones únicamente a partir del
material proporcionado por el docente. Debe preservar la estructura del proyecto
y aplicar el estilo visual establecido en `src/index.css`.

Antes de modificar una presentación, debe revisar una presentación existente y
los estilos disponibles para reutilizar los componentes, las clases y los
patrones ya definidos. Cuando se modifique código fuente, debe ejecutar desde
`docs/presentations` las verificaciones disponibles: `npm run lint` y
`npm run build`.

## Autoría y tratamiento del contenido

El docente es la única fuente de contenido. Define el tema, la estructura, la
narrativa y el enfoque de cada presentación.

- El agente nunca impone, inventa ni amplía el contenido.
- Solo puede corregir ortografía, gramática y redacción, sin alterar el sentido,
  el orden, la línea narrativa ni el enfoque establecidos por el docente.
- No agrega temas, ejemplos, afirmaciones, imágenes, diagramas, conclusiones ni
  recursos que no hayan sido solicitados o proporcionados explícitamente.
- Si faltan el contenido, la división en diapositivas o un dato necesario para
  implementar la presentación sin introducir decisiones editoriales, debe pedir
  aclaración antes de continuar.
