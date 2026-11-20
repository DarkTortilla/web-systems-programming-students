import type { Product } from "../types/Product"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="flex flex-col justify-center h-32 border border-slate-400 rounded-2xl">
            <div className="text-center">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
            <a className="p-2 w-fit mx-auto text-center cursor-pointer bg-slate-600 text-white rounded-xl hover:bg-slate-800">ver detalles</a>
        </article> 
    )
}