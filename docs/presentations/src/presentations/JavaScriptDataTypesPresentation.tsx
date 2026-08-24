import { Code, Slide } from '@revealjs/react'
import {
  CircleStackIcon,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline'
import { Presentation } from '../shared/components/Presentation'

const dynamicTypingExample = `let name = "Frank";
name = 5;

console.log(name); // 5`

const primitiveValuesExample = `const name = "Frank";
const age = 26;
const active = true;
const id = Symbol("id");
const emptyValue = undefined;
const noData = null;
const largeNumber = 12345678901234567890n;`

const primitiveCopyExample = `const num = 5;
let num2 = num;

num2 = 456;

console.log(num);  // 5
console.log(num2); // 456`

const personExample = `const person = {
  name: "Luis",
  lastName: "Estrada",
  age: 52,
  phone: 1234567890,
};`

const objectAccessExample = `console.log(person);      // objeto completo
console.log(person.name); // Luis

const key = "name";

console.log(person[key]); // Luis

person.name = "Juan";

console.log(person.name); // Juan`

const objectReferenceExample = `const person2 = person;

person2.name = "Lau";

console.log(person.name);  // Lau
console.log(person2.name); // Lau

const person3 = { ...person };`

const arrayExample = `const array = [12, 45, 56, 51, 12];

const mix = ["51", 15, false, new Date()];

const position2 = array[1];

console.log(position2); // 45`

const arrayOperationsExample = `const array = [12, 45, 56];

array.push(5); // agrega 5 al final
array.pop();   // elimina el último elemento

console.log(array); // [12, 45, 56]

const arrayCopy = [...array];`

const copyDepthExample = `const peopleCopy = [...people];

peopleCopy[0].name = "Antonio";

const deepPeopleCopy = structuredClone(people);`

export function JavaScriptDataTypesPresentation() {
  return (
    <Presentation label="Presentación: Tipos de datos en JavaScript">
      <Slide>
        <div className="slide-kicker">01 · Tipos de datos en JavaScript</div>
        <div className="slide-code-layout">
          <div>
            <CodeBracketSquareIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Primitivos y valores compuestos</h2>
            <p className="slide-lead">
              JavaScript trabaja con distintos tipos de datos para representar información. De
              forma general, se dividen en valores primitivos y valores compuestos, como objetos
              y arreglos.
            </p>
            <p>
              Es un lenguaje de tipado dinámico: una variable puede almacenar valores de
              diferentes tipos durante la ejecución.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{dynamicTypingExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">02 · Valores primitivos</div>
        <div className="slide-two-columns">
          <div>
            <h2>Los datos más básicos</h2>
            <p className="slide-lead">
              No son objetos y son inmutables: no se modifica el valor original, sino que se
              asigna uno nuevo.
            </p>
            <ul className="slide-list">
              <li><code>string</code>: texto.</li>
              <li><code>number</code>: números enteros y decimales.</li>
              <li><code>bigint</code>: números enteros muy grandes.</li>
              <li><code>boolean</code>: valores <code>true</code> o <code>false</code>.</li>
              <li><code>undefined</code>: variable declarada sin valor asignado.</li>
              <li><code>null</code>: ausencia intencional de un valor.</li>
              <li><code>symbol</code>: identificadores únicos.</li>
            </ul>
          </div>
          <Code language="javascript" lineNumbers>{primitiveValuesExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">03 · Primitivos: copia por valor</div>
        <div className="slide-code-layout">
          <div>
            <CubeTransparentIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Cada variable conserva su propio valor</h2>
            <p className="slide-lead">
              Cuando se asigna un valor primitivo a otra variable, se crea una copia
              independiente.
            </p>
            <p>
              Cambiar <code>num2</code> no modifica <code>num</code>.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{primitiveCopyExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">04 · Objetos</div>
        <div className="slide-two-columns">
          <div>
            <h2>Información relacionada en un solo valor</h2>
            <p className="slide-lead">
              Un objeto permite agrupar información relacionada mediante pares de propiedad y
              valor.
            </p>
            <p>
              En este ejemplo, <code>name</code>, <code>lastName</code>, <code>age</code> y
              <code>phone</code> son las propiedades o llaves del objeto.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{personExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">05 · Acceso y modificación de objetos</div>
        <div className="slide-code-layout">
          <div>
            <h2>Notación de punto y corchetes</h2>
            <p className="slide-lead">
              Podemos mostrar un objeto completo, acceder a una propiedad específica o modificar
              su valor.
            </p>
            <p className="slide-callout">
              <strong>Nota:</strong> <code>person[name]</code> no es correcto si
              <code>name</code> no contiene una llave válida. Usa <code>person["name"]</code> o
              <code>person[key]</code>.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{objectAccessExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">06 · Objetos: referencia y copias</div>
        <div className="slide-two-columns">
          <div>
            <CircleStackIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Dos variables pueden señalar al mismo objeto</h2>
            <p className="slide-lead">
              Los objetos se manejan por referencia. Un cambio realizado desde una variable se
              verá en ambas si apuntan al mismo objeto.
            </p>
            <p>
              El operador de propagación crea una copia superficial del objeto.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{objectReferenceExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">07 · Arreglos</div>
        <div className="slide-two-columns">
          <div>
            <RectangleStackIcon className="size-16 text-accent" aria-hidden="true" />
            <h2>Una lista ordenada de valores</h2>
            <p className="slide-lead">
              Un arreglo, también llamado array o vector, puede almacenar valores del mismo tipo
              o de distintos tipos.
            </p>
            <p>
              Sus elementos se identifican por un índice que comienza en <code>0</code>.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{arrayExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">08 · Operaciones básicas con arreglos</div>
        <div className="slide-code-layout">
          <div>
            <h2>Agregar, eliminar y copiar</h2>
            <p className="slide-lead">
              Los métodos <code>push()</code> y <code>pop()</code> modifican el final del
              arreglo.
            </p>
            <p>
              El operador de propagación también permite crear una copia superficial.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{arrayOperationsExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">09 · Copias superficiales y profundas</div>
        <div className="slide-two-columns">
          <div>
            <h2>Copiar el contenedor no siempre basta</h2>
            <p className="slide-lead">
              El operador <code>...</code> crea una copia superficial. Los objetos internos de un
              arreglo siguen compartiendo la misma referencia.
            </p>
            <p>
              Por eso cambiar <code>peopleCopy[0].name</code> también modifica
              <code>people[0]</code>. Para una copia profunda se puede usar
              <code>structuredClone()</code>.
            </p>
          </div>
          <Code language="javascript" lineNumbers>{copyDepthExample}</Code>
        </div>
      </Slide>

      <Slide>
        <div className="slide-kicker">Referencias</div>
        <div className="slide-summary">
          <CodeBracketSquareIcon aria-hidden="true" />
          <strong>Para profundizar</strong>
          <ul className="slide-list text-left">
            <li>MDN: Tipos de datos y estructuras en JavaScript.</li>
            <li>MDN: Valores primitivos.</li>
            <li>MDN: Trabajando con objetos.</li>
            <li>MDN: Array.</li>
            <li>W3Schools: JavaScript Data Types.</li>
            <li>W3Schools: JavaScript Objects.</li>
            <li>W3Schools: JavaScript Arrays.</li>
          </ul>
        </div>
      </Slide>
    </Presentation>
  )
}
