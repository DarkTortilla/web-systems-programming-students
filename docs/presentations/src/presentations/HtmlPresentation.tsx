import { Code, Fragment, Slide } from '@revealjs/react'
import {
  Bars3BottomLeftIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { Presentation } from '../shared/components/Presentation'

const htmlDocument = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola, web</h1>
    <p>Este es mi contenido.</p>
  </body>
</html>`

const htmlAttributes = `<a href="https://example.com" target="_blank">
  Visitar sitio
</a>

<img src="paisaje.jpg" alt="Montañas al amanecer" />`

export function HtmlPresentation() {
  return (
    <Presentation label="Presentación: Introducción a HTML">
      <Slide backgroundColor="#222831" className="slide-cover">
        <div className="slide-kicker">Lenguaje de marcas</div>
        <CodeBracketSquareIcon className="slide-cover-icon" aria-hidden="true" />
        <h1>Introducción a HTML</h1>
        <p>La estructura y el significado detrás de cada página web.</p>
      </Slide>

      <Slide>
        <div className="slide-kicker">01 · Su propósito</div>
        <h2>HTML describe el contenido</h2>
        <p className="slide-lead">
          HyperText Markup Language organiza información mediante elementos con significado.
        </p>
        <div className="technology-row">
          <Fragment animation="fade-up" as="div" className="technology-card is-html">
            <strong>HTML</strong>
            <span>Estructura</span>
          </Fragment>
          <Fragment animation="fade-up" as="div" className="technology-card">
            <strong>CSS</strong>
            <span>Presentación</span>
          </Fragment>
          <Fragment animation="fade-up" as="div" className="technology-card">
            <strong>JavaScript</strong>
            <span>Comportamiento</span>
          </Fragment>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">02 · Documento mínimo</div>
        <div className="slide-code-layout">
          <div>
            <h2>Una estructura anidada</h2>
            <p className="slide-lead">
              El navegador interpreta un árbol de elementos que comienza en
              <code>&lt;html&gt;</code>.
            </p>
          </div>
          <Code language="html" lineNumbers>
            {htmlDocument}
          </Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">03 · Elementos y atributos</div>
        <div className="slide-two-columns">
          <div>
            <h2>Etiquetas que describen; atributos que precisan</h2>
            <ul className="slide-list">
              <li>La etiqueta define el tipo de contenido.</li>
              <li>El contenido vive entre apertura y cierre.</li>
              <li>Los atributos agregan configuración o contexto.</li>
            </ul>
          </div>
          <Code language="html">{htmlAttributes}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">04 · Semántica y contenido</div>
        <div className="slide-two-columns">
          <div className="semantic-layout" aria-label="Estructura semántica de una página">
            <span>header</span>
            <span>nav</span>
            <div>
              <span>main</span>
              <span>article</span>
            </div>
            <span>footer</span>
          </div>
          <div>
            <h2>Elegir la etiqueta correcta importa</h2>
            <p className="slide-lead">
              La semántica ayuda a navegadores, buscadores, tecnologías de asistencia y
              equipos de desarrollo.
            </p>
            <div className="slide-icon-notes">
              <DocumentTextIcon aria-hidden="true" />
              <span>Texto: encabezados, párrafos y listas.</span>
              <Bars3BottomLeftIcon aria-hidden="true" />
              <span>Interacción: enlaces, botones y formularios.</span>
            </div>
          </div>
        </div>
      </Slide>
    </Presentation>
  )
}
