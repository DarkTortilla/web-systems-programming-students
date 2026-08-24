import { Fragment, Slide } from '@revealjs/react'
import {
  ArrowLongRightIcon,
  CircleStackIcon,
  CloudArrowDownIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline'
import { Presentation } from '../shared/components/Presentation'

export function ClientServerPresentation() {
  return (
    <Presentation label="Presentación: Arquitectura cliente-servidor">
      <Slide backgroundColor="#222831" className="slide-cover">
        <div className="slide-kicker">Fundamentos de aplicaciones web</div>
        <ComputerDesktopIcon className="slide-cover-icon" aria-hidden="true" />
        <h1>Arquitectura cliente-servidor</h1>
        <p>Dos participantes, una conversación y un objetivo compartido.</p>
      </Slide>

      <Slide>
        <div className="slide-kicker">01 · El cliente</div>
        <div className="slide-two-columns">
          <div>
            <h2>El punto de contacto con la persona</h2>
            <p className="slide-lead">
              El cliente solicita recursos, presenta la interfaz y captura las acciones del
              usuario.
            </p>
            <ul className="slide-list">
              <li>Construye y envía peticiones.</li>
              <li>Interpreta HTML, CSS y JavaScript.</li>
              <li>Muestra la respuesta de forma interactiva.</li>
            </ul>
          </div>
          <div className="slide-visual-card">
            <ComputerDesktopIcon aria-hidden="true" />
            <strong>Navegador</strong>
            <span>Chrome · Firefox · Safari</span>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">02 · El servidor</div>
        <div className="slide-two-columns">
          <div className="slide-visual-card slide-visual-card-dark">
            <ServerStackIcon aria-hidden="true" />
            <strong>Servidor web</strong>
            <span>Procesa reglas y protege los datos</span>
          </div>
          <div>
            <h2>El sistema que atiende la solicitud</h2>
            <p className="slide-lead">
              El servidor recibe peticiones, ejecuta la lógica de negocio y prepara una
              respuesta.
            </p>
            <ul className="slide-list">
              <li>Valida entradas y permisos.</li>
              <li>Consulta servicios o bases de datos.</li>
              <li>Devuelve documentos, archivos o JSON.</li>
            </ul>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">03 · Petición y respuesta</div>
        <h2>Una conversación sobre HTTP</h2>
        <p className="slide-lead">Cada interacción web recorre un ciclo predecible.</p>
        <div className="request-flow">
          <Fragment animation="fade-up" as="div" className="request-flow-step">
            <ComputerDesktopIcon aria-hidden="true" />
            <span>1. Cliente</span>
            <small>Solicita `/productos`</small>
          </Fragment>
          <Fragment animation="fade-in" as="div" className="request-flow-arrow">
            <ArrowLongRightIcon aria-hidden="true" />
            <small>HTTP</small>
          </Fragment>
          <Fragment animation="fade-up" as="div" className="request-flow-step">
            <ServerStackIcon aria-hidden="true" />
            <span>2. Servidor</span>
            <small>Procesa la petición</small>
          </Fragment>
          <Fragment animation="fade-in" as="div" className="request-flow-arrow">
            <ArrowLongRightIcon aria-hidden="true" />
            <small>consulta</small>
          </Fragment>
          <Fragment animation="fade-up" as="div" className="request-flow-step">
            <CircleStackIcon aria-hidden="true" />
            <span>3. Datos</span>
            <small>Encuentra resultados</small>
          </Fragment>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">04 · Ejemplo completo</div>
        <div className="slide-two-columns">
          <div>
            <h2>Visitar una tienda en línea</h2>
            <ol className="slide-numbered-list">
              <li>El navegador envía <code>GET /productos</code>.</li>
              <li>El servidor valida la solicitud.</li>
              <li>La base de datos entrega los productos.</li>
              <li>El servidor responde con datos o HTML.</li>
              <li>El cliente construye la pantalla final.</li>
            </ol>
          </div>
          <div className="slide-summary">
            <CloudArrowDownIcon aria-hidden="true" />
            <strong>Idea clave</strong>
            <p>
              El cliente se ocupa de la experiencia; el servidor coordina las reglas y los
              datos.
            </p>
          </div>
        </div>
      </Slide>
    </Presentation>
  )
}
