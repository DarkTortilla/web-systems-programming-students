import Button from "../../components/atoms/Button"
import type { Product } from "../types/Product"

type ProductCardProps= {
    product: Product
}

export default function ProductCard({product}:ProductCardProps) {
    return (
        <div>
            {product.name}
            <span>{product.price}</span>
            {product.description}
            <Button text="ver detalle" fnClick={() => ({})} />
        </div>
    )
}
