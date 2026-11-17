import Banner from "./components/organisms/Banner"
import ProductContainer from "./products/components/ProductContainer"

function App() {
  return (
    <>
      {/* header */}
      <header>
        <a href="#inicio">Tienda</a>
        <nav aria-label="Navegación principal">
          <a href="#productos">Productos</a>
        </nav>
      </header>

      <main id="inicio">
        {/* banner */}
        <Banner text="" title="" textLink="" link="" />
        {/* carrousel */}
        <section aria-label="Carrusel de destacados">
          <h2>Destacados</h2>
          <article >
            <h3>Producto destacado 1</h3>
            <p>Descripción del producto.</p>
            <a href=""></a>
          </article>
          <article>
            <h3>Producto destacado 2</h3>
            <p>Descripción del producto.</p>
            <a href=""></a>
          </article>
        </section>
        {/* contendor de productos */}
        <ProductContainer title="" products={[]} />
      </main>
      {/* footer */}
      <footer>
        <p>© Tienda</p>
      </footer>
    </>
  )
}

export default App
