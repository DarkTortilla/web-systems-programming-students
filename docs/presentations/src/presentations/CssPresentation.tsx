import { Code, Fragment, Slide } from '@revealjs/react'
import {
  ArrowsPointingOutIcon,
  PaintBrushIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { Presentation } from '../shared/components/Presentation'

const cssRule = `.tarjeta {
  background: white;
  color: #222831;
  padding: 1.5rem;
  border-radius: 0.75rem;
}`

const responsiveCss = `.contenedor {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .contenedor {
    grid-template-columns: repeat(3, 1fr);
  }
}`

export function CssPresentation() {
  return (
    <Presentation label="Presentación: Introducción a CSS">
      <Slide backgroundColor="#222831" className="slide-cover">
        <div className="slide-kicker">Hojas de estilo en cascada</div>
        <PaintBrushIcon className="slide-cover-icon" aria-hidden="true" />
        <h1>Introducción a CSS</h1>
        <p>Reglas visuales para transformar estructura en experiencia.</p>
      </Slide>

      <Slide>
        <div className="slide-kicker">01 · Su propósito</div>
        <div className="slide-two-columns">
          <div>
            <h2>CSS presenta el documento</h2>
            <p className="slide-lead">
              Define colores, tipografía, espacio, distribución y adaptación a diferentes
              pantallas.
            </p>
            <ul className="slide-list">
              <li>Separa el contenido de su apariencia.</li>
              <li>Reutiliza reglas en muchas páginas.</li>
              <li>Permite responder al dispositivo y al usuario.</li>
            </ul>
          </div>
          <div className="before-after-card">
            <Fragment animation="fade-out" as="div" className="unstyled-example">
              <strong>HTML</strong>
              <span>Contenido sin estilo</span>
            </Fragment>
            <Fragment animation="fade-in" as="div" className="styled-example">
              <PaintBrushIcon aria-hidden="true" />
              <strong>HTML + CSS</strong>
              <span>Jerarquía, color y espacio</span>
            </Fragment>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">02 · Anatomía de una regla</div>
        <div className="slide-code-layout">
          <div>
            <h2>Selector, propiedad y valor</h2>
            <p className="slide-lead">
              El selector encuentra elementos; cada declaración asigna un valor a una
              propiedad.
            </p>
            <div className="css-anatomy">
              <span><strong>.tarjeta</strong> selector</span>
              <span><strong>padding</strong> propiedad</span>
              <span><strong>1.5rem</strong> valor</span>
            </div>
          </div>
          <Code language="css" lineNumbers>{cssRule}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">03 · Selectores y cascada</div>
        <h2>Varias reglas pueden competir</h2>
        <p className="slide-lead">
          La cascada decide el resultado según importancia, especificidad y orden de aparición.
        </p>
        <div className="selector-grid">
          <div><code>p</code><span>Elemento</span><small>0-0-1</small></div>
          <div><code>.aviso</code><span>Clase</span><small>0-1-0</small></div>
          <div><code>#principal</code><span>Identificador</span><small>1-0-0</small></div>
        </div>
        <p className="slide-callout">
          Una regla más específica suele prevalecer; si empatan, gana la última declarada.
        </p>
      </Slide>

      <Slide>
        <div className="slide-kicker">04 · Caja, layout y respuesta</div>
        <div className="slide-two-columns">
          <div>
            <h2>Todo elemento ocupa una caja</h2>
            <div className="box-model" aria-label="Capas del modelo de caja">
              <span>margin<span>border<span>padding<strong>content</strong></span></span></span>
            </div>
            <div className="slide-icon-notes compact">
              <ArrowsPointingOutIcon aria-hidden="true" />
              <span>El modelo de caja controla tamaño y separación.</span>
              <Squares2X2Icon aria-hidden="true" />
              <span>Grid, Flexbox y media queries organizan el layout.</span>
            </div>
          </div>
          <Code language="css" lineNumbers>{responsiveCss}</Code>
        </div>
      </Slide>
    </Presentation>
  )
}
