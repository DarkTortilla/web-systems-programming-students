import Button from '../../components/atoms/Button'

export default function ProductCard() {
    return (
        <div>
            <p>{product.name}</p>
            <span>{product.price}</span>
            <Button text="ver detalle" fnClick={() => ({})} />
        </div>
    )
}
