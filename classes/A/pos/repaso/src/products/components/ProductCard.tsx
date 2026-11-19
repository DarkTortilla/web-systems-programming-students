import type { Product } from "../types/Product"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="flex flex-col justify-center border border-b-gray-200 h-32">
            <div >
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
            <a className="bg-gray-300 text-slate-800 p-2 w-4/5 mx-auto hover:bg-gray-500 cursor-pointer">ver detalles</a>
        </article>
    )
}