import type { Product } from "../types/Product"
import ProductCard from "./ProductCard"

type ProductContainerProps = {
    title: string
    products: Product[]
}

export default function ProductContainer({ title, products }: ProductContainerProps) {
    return (
        <section id="productos" className="max-w-6xl mx-auto bg-blue-100 p-6 rounded-2xl">
            <h2 className="sm:text-4xl font-bold my-2 text-3xl">{title}</h2>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {products.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </section>
    )
}