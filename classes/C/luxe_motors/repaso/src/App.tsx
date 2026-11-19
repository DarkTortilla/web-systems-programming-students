import { useEffect, useState } from "react"
import Carrousel from "./components/organisms/Carrousel"
import Header from "./components/organisms/Header"
import ProductContainer from "./products/components/ProductContainer"
import { getProducts } from "./products/services/products.service"
import type { Product } from "./products/types/Product"

function App() {
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(false);

useEffect(()=>{
  setLoading(true)
  getData();
},[]);

const getData=async()=>{

  const response = await getProducts();
  setLoading(false);
  response !==null ? setProducts(response) : setProducts([]);
}

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
      {loading? <span>cargando...</span>:<ProductContainer title="nuevos" products={products} />}
      
      </main>

      <footer>
        <p>© Tienda</p>
      </footer>
    </>
  )
}

export default App



class p {
  private name: string='';

  setName(name:string){
    this.name=name;
  }
  getName(){
    return this.name;
  }

}