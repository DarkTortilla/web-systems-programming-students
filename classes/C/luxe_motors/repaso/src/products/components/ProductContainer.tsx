import type { Product } from "../types/Product"
import ProductCard from "./ProductCard"

type ProductContainerProps = {
    title: string
    products: Product[]
}

export default function ProductContainer({ title, products }: ProductContainerProps) {
    return (
        <section id="productos" className="bg-slate-700 border-2">
            <h2>{title}</h2>
            <div>
                {products.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </section>
    )
}