import type { Product } from "../types/Product"

type ProductContainerProps = {
    title: string;
    products: Product[];
}

export default function ProductContainer({ products, title }: ProductContainerProps) {
    return (
        <section id="productos">
            <h2>{title}</h2>
            <div>
                {products.map(product => (
                    <article key={product.id} >
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <a href="">ver detalle</a>
                    </article>
                ))}
            </div>
        </section>
    )
}