import Carrousel from "./components/organisms/Carrousel"
import Header from "./components/organisms/Header"
import ProductContainer from "./products/components/ProductContainer"

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

      <ProductContainer  />
      </main>

      <footer>
        <p>© Tienda</p>
      </footer>
    </>
  )
}

export default App
