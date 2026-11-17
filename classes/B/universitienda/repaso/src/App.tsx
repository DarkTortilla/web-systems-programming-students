function App() {
  return (
    <>
      <header>
        <a href="#inicio">Tienda</a>
        <nav aria-label="Navegación principal">
          <a href="#productos">Productos</a>
        </nav>
      </header>

      <main id="inicio">
        <section>
          <h1>Encuentra tus productos favoritos</h1>
          <p>Descubre nuestra selección de productos.</p>
          <a href="#productos">Ver productos</a>
        </section>

        <section aria-label="Carrusel de destacados">
          <h2>Destacados</h2>
          <article>
            <h3>Producto destacado 1</h3>
            <p>Descripción del producto.</p>
          </article>
          <article>
            <h3>Producto destacado 2</h3>
            <p>Descripción del producto.</p>
          </article>
        </section>

        <section id="productos">
          <h2>Productos</h2>
          <div>
            <article>
              <h3>Producto 1</h3>
              <p>$100</p>
            </article>
            <article>
              <h3>Producto 2</h3>
              <p>$200</p>
            </article>
            <article>
              <h3>Producto 3</h3>
              <p>$300</p>
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
