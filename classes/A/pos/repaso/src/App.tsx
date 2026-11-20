import { useEffect, useState } from "react"
import Banner from "./components/organisms/Banner"
import ProductContainer from "./products/components/ProductContainer"
import type { Product } from "./products/types/Product"
import { getProducts } from "./products/services/products.service";

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {

    const response = await getProducts({});
    setLoading(false);
    response !== null ? setProducts(response.data) : setProducts([]);
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, [])




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
        {loading ?
         <span>cargando...</span>: 
         <ProductContainer title="Nuevos" products={products} />}
      </main>
      {/* footer */}
      <footer>
        <p>© Tienda</p>
      </footer>
    </>
  )
}

export default App
