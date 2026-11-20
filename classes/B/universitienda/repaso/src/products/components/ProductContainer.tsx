import type { Product } from "../types/Product"

type ProductContainerProps = {
    title: string;
    products: Product[];
}

export default function ProductContainer({ products, title }: ProductContainerProps) {
    return (
        <section id="productos" className="max-w-6xl mx-auto py-12 px-6 ">
            <h2>{title}</h2>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {products.map(product => (
                    <article key={product.id} className="flex flex-col rounded-xl border border-neutral-200 p-5" >
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p>{product.price}</p>
                        <a href="https://www.uaa.mx" className="w-fit text-sm mt-6 bg-blue-300 px-6 py-2 rounded-lg">ver detalle</a>
                    </article>
                ))}
            </div>
        </section>
    )
}