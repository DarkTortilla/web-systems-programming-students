import Carrousel from "./components/organisms/Carrousel"
import Footer from "./components/organisms/Footer"
import Header from "./components/organisms/Header"

function App() {
  return (
    <>
    {/* header */}
      <Header />

      <main id="inicio">
        {/* banner */}
        <section>
          <h1>Encuentra tus productos favoritos</h1>
          <p>Descubre nuestra selección de productos.</p>
          <a href="#productos">Ver productos</a>
        </section>
        {/* carrousel */}
        <Carrousel text="" carrouselItems={[]}/>
        {/* product container */}
        <section id="productos">
          <h2>Productos</h2>
          <div>
            {/* product card */}
            <article>
              <h3>Producto 1</h3>
              <p>$100</p>
              <a href="">ver detalle</a>
            </article>
            <article>
              <h3>Producto 2</h3>
              <p>$200</p>
              <a href="">ver detalle</a>
            </article>
            <article>
              <h3>Producto 3</h3>
              <p>$300</p>
              <a href="">ver detalle</a>
            </article>
          </div>
        </section>
      </main>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
