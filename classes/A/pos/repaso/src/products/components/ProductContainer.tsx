import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type ProductContainerProps = {
    title: string;
    products: Product[]
}

export default function ProductContainer({ title, products }: ProductContainerProps) {
    return (
        <section id="productos" className="max-w-6xl mx-auto bg-slate-300 p-3 rounded-2xl">
            <h2 className="text-3xl my-2 font-bold">{title}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {/* card de producto */}
                {products.map(p => (
                    <ProductCard product={p}/>
                ))}
            </div>
        </section>
    )

}