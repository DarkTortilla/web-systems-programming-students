import { useEffect, useState } from "react"
import Carrousel from "./components/organisms/Carrousel"
import Footer from "./components/organisms/Footer"
import Header from "./components/organisms/Header"
import ProductContainer from "./products/components/ProductContainer"
import type { Product } from "./products/types/Product"
import { getProducts } from "./products/services/products.service"

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async ()=>{
    const products = await getProducts();
    setLoading(false);
    products!==null ? setProducts(products) : setProducts([]);
  }

  useEffect(()=>{
    setLoading(true);
    getData()
  }, [])

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
        {loading? <span>cargando...</span>:  <ProductContainer title="nuevo" products={products}/>}
       
      </main>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
