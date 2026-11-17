import Carrousel from "./components/organisms/Carrousel"
import Header from "./components/organisms/Header"

function App() {
  return (
    <>
      <Header/>

      <main id="inicio">
        <section>
          <h1>Encuentra tus productos favoritos</h1>
          <p>Descubre nuestra selección de productos.</p>
          <a href="#productos">Ver productos</a>
        </section>

        <Carrousel/>

        <section id="productos">
          <h2>Productos</h2>
          <div>
            <article>
              <h3>Producto 1</h3>
              <p>$100</p>
              <button>ver detalle</button>
            </article>
            <article>
              <h3>Producto 2</h3>
              <p>$200</p>
              <button>ver detalle</button>
            </article>
            <article>
              <h3>Producto 3</h3>
              <p>$300</p>
              <button>ver detalle</button>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© Tienda</p>
      </footer>
    </>
  )
}

export default App
