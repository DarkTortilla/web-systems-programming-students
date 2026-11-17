import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type ProductContainerProps = {
    title: string;
    products: Product[]
}

export default function ProductContainer({ title, products }: ProductContainerProps) {
    return (
        <section id="productos">
            <h2>{title}</h2>
            <div>
                {/* card de producto */}
                {products.map(p => (
                    <ProductCard product={p}/>
                ))}
            </div>
        </section>
    )

}