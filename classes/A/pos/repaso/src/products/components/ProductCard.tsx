import type { Product } from "../types/Product"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a>ver detalles</a>
        </article>
    )
}