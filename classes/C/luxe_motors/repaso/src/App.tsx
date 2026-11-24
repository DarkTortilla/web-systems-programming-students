import { useEffect, useState } from "react"
import Carrousel from "./components/organisms/Carrousel"
import Header from "./components/organisms/Header"
import ProductContainer from "./products/components/ProductContainer"
import { getProducts } from "./products/services/products.service"
import type { Product } from "./products/types/Product"

function App() {
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [page, setPage] = useState<number>(1);

useEffect(()=>{
  setLoading(true);
  getData();
},[page]);


const getData=async()=>{
  const response = await getProducts(page, 1);
  setLoading(false);
  response !==null ? setProducts(response.data) : setProducts([]);
}

const handlePaginationClick=(newPage:number)=>{

  if(newPage<1){
    newPage=1;
  }

  setPage(newPage);
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
      {loading? <span className="animate-spin"></span>:<ProductContainer title="nuevos" products={products} />}
      <button 
        className="py-1 px-2 bg-sky-400"
      onClick={()=>handlePaginationClick(page-1)}>prev</button>
      <span>{page}</span>
      <button 
        className="py-1 px-2 bg-sky-400"
      onClick={()=>handlePaginationClick(page+1)}>next</button>
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