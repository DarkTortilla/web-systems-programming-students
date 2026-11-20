import type { Product } from "../types/Product"

type ProductCardProps = {
    product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="flex flex-col border border-blue-400 rounded-xl items-center p-1 ">
            <h3 className="font-semibold text-xl">{product.name}</h3>
            <p>{product.price}$</p>
            <a href="" className=" bg-blue-300 hover:bg-blue-500 py-1 px-4 rounded-xl w-fit">ver detalle</a>
        </article>
    )
}