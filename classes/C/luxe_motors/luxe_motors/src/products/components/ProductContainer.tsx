import Button from "../../components/atoms/Button"

type ProductContainerProps = {
    products: { id: number, name: string, price: number }[]
}

export default function ProductContainer({ products }: ProductContainerProps) {
    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <p>{p.name}</p>
                    <span>{p.price}</span>
                    <Button text="ver detalle" fnClick={() => ({})} />
                </div>

            ))}
        </div>
    )
}
