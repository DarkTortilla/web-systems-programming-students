import Button from "../../components/atoms/Button"
import type { Product } from "../types/Product"

type ProductCardProps ={
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div>
        <p>{product.name}</p>
        <span>{product.price}</span>
        <Button text="ver detalle" fnClick={()=>({})} />
    </div>
  )
}
