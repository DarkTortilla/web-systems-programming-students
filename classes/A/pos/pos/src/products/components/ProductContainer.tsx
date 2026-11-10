import type { Product } from "../types/Product"
import ProductCard from "./ProductCard"

type ProductContainerProps = {
    products: Product[]
}

export default function ProductContainer({products}:ProductContainerProps) {
  return (
    <div>
        {products.map(p=>(
            <ProductCard product={p}/>
        ))}
    </div>
  )
}
