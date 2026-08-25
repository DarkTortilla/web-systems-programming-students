import { Code, Slide } from '@revealjs/react'
import {
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { Presentation } from '../shared/components/Presentation'

const ifExample = `const product = products[0];

if (product.price > 5000) {
  console.log("Producto premium");
} else {
  console.log("Producto estándar");
}`

const equalityExample = `console.log("34" == 34);    // true
console.log("34" === 34);   // false`

const falsyExample = `const selectedProduct = undefined;

if (!selectedProduct) {
  console.log("No se encontró el producto");
}`

const ternaryExample = `const isAdmin = false;

const roleLabel = isAdmin
  ? "Administrador"
  : "Estudiante";

console.log(roleLabel); // Estudiante`

const shortCircuitExample = `isLoggedIn && showDashboard();

// showDashboard() solo se evalúa
// si isLoggedIn es true.`

const javascriptForExample = `for (let index = 0; index < products.length; index++) {
  const product = products[index];
  console.log(product.name);
}`

const javaForExample = `for (int index = 0; index < products.size(); index++) {
  Product product = products.get(index);
  System.out.println(product.getName());
}`

const javascriptFindExample = `const product = products.find(
  (product) => product.price === 1299,
);

// Product | undefined`

const javaFindExample = `Product found = null;

for (Product product : products) {
  if (product.getPrice() == 1299) {
    found = product;
    break;
  }
}`

const filterAndMapExample = `const expensiveProducts = products.filter(
  (product) => product.price > 5000,
);

const productsWithId = products.map((product, index) => ({
  id: index,
  ...product,
}));`

export function JavaScriptControlStructuresPresentation() {
  return (
    <Presentation label="Presentación: Estructuras de control en JavaScript">
      <Slide>
        <div className="slide-kicker">01 · If: sintaxis conocida, condiciones flexibles</div>
        <div className="slide-two-columns">
          <div>
            <h2>El bloque se lee igual</h2>
            <p className="slide-lead">
              Como en C y Java, una condición decide qué bloque se ejecuta. La diferencia es que
              JavaScript convierte valores a booleanos cuando los evalúa en una condición.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{ifExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">02 · Igualdad: usa comparación estricta</div>
        <div className="slide-two-columns">
          <div>
            <ArrowsRightLeftIcon className="size-16 text-accent" aria-hidden="true" />
            <h2><code>==</code> no compara el tipo; <code>===</code> sí</h2>
            <p className="slide-lead">
              <code>==</code> compara los valores y puede convertir el tipo. <code>===</code>
              compara el valor y el tipo sin conversiones implícitas.
            </p>
            <p>
              Es preferible usar siempre <code>===</code> y <code>!==</code>.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{equalityExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">03 · Valores falsy</div>
        <div className="slide-two-columns">
          <div>
            <h2>Valores que una condición interpreta como <code>false</code></h2>
            <ul className="slide-list">
              <li><code>false</code></li>
              <li><code>null</code></li>
              <li><code>undefined</code></li>
              <li><code>0</code></li>
              <li><code>''</code> (cadena vacía)</li>
              <li><code>NaN</code></li>
            </ul>
          </div>
          <Code language="javascript" lineNumbers>{falsyExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">04 · Ternario: elegir un valor</div>
        <div className="slide-code-layout">
          <div>
            <h2>Una asignación condicional en una expresión</h2>
            <p className="slide-lead">
              El operador ternario usa la forma <code>condición ? valorSiTrue : valorSiFalse</code>.
              Es útil cuando ambas ramas producen el valor que se asignará o retornará.
            </p>
            <p>
              Para varios pasos, condiciones anidadas, un
              <code>if/else</code> suele ser más claro.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{ternaryExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">05 · Operador de corto circuito</div>
        <div className="slide-two-columns">
          <div>
            <h2><code>&amp;&amp;</code> detiene la evaluación</h2>
            <p className="slide-lead">
              Si la expresión izquierda es <code>false</code>, JavaScript no evalúa la expresión
              derecha. Es útil para ejecutar una acción solo cuando se cumple una condición.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{shortCircuitExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">06 · For: el ciclo clásico</div>
        <div className="slide-two-columns">
          <div>
            <h2>Misma estructura, detalles del arreglo</h2>
            <p className="slide-lead">
              La estructura inicialización, condición e incremento es la misma. En JavaScript se
              acostumbra declarar el índice con <code>let</code> para limitar su alcance al ciclo.
            </p>
            <p>
              Para un <code>Array</code> se usa <code>length</code>; en un <code>List</code> de
              Java se usa <code>size()</code>.
            </p>
          </div>
          <div className="space-y-4">
            <Code language="javascript" lineNumbers>{javascriptForExample}</Code>
            <Code language="java" lineNumbers>{javaForExample}</Code>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">07 · Find: buscar el primer elemento</div>
        <div className="slide-two-columns">
          <div>
            <MagnifyingGlassIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Declara la intención, no el recorrido</h2>
            <p className="slide-lead">
              <code>find()</code> revisa el arreglo hasta encontrar el primer elemento que cumple
              el predicado. Si no hay coincidencia, devuelve <code>undefined</code>.
            </p>
            <p>
              En Java es común declarar una variable, recorrer, asignar y detener el ciclo. En
              JavaScript, <code>find()</code> concentra ese patrón.
            </p>
          </div>
          <div className="space-y-4">
            <Code language="javascript" lineNumbers>{javascriptFindExample}</Code>
            <Code language="java" lineNumbers>{javaFindExample}</Code>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">08 · Filter y map: seleccionar y transformar</div>
        <div className="slide-two-columns">
          <div>
            <FunnelIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Dos resultados, dos intenciones</h2>
            <p className="slide-lead">
              <code>filter()</code> devuelve todos los elementos que cumplen una condición.
              <code>map()</code> devuelve un nuevo arreglo con cada elemento transformado.
            </p>
            <p>
              Ambos expresan qué resultado se busca. La devolución de <code>map()</code> no
              modifica el arreglo original; aquí cada producto se copia de forma superficial.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{filterAndMapExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">Referencias</div>
        <div className="slide-summary">
          <CheckCircleIcon aria-hidden="true" />
          <strong>Para profundizar</strong>
          <ul className="slide-list text-left">
            <li>
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness" target="_blank" rel="noreferrer">MDN: Comparaciones de igualdad.</a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noreferrer">MDN: Valores falsy.</a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND" target="_blank" rel="noreferrer">MDN: Operador AND lógico.</a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" target="_blank" rel="noreferrer">MDN: if...else</a>{' '}
              y <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" target="_blank" rel="noreferrer">for</a>.
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank" rel="noreferrer">MDN: find()</a>,{' '}
              <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noreferrer">filter()</a>{' '}
              y <a className="underline decoration-accent underline-offset-4" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noreferrer">map()</a>.
            </li>
          </ul>
        </div>
      </Slide>
    </Presentation>
  )
}
