import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type ProductContainerProps = {
    title: string;
    products: Product[]
}

export default function ProductContainer({ title, products }: ProductContainerProps) {
    return (
        <section id="productos" className="">
            <h2>{title}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
                {/* card de producto */}
                {products.map(p => (
                    <ProductCard product={p}/>
                ))}
            </div>
        </section>
    )

}