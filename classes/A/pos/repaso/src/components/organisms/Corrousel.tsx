type CarrouselProps = {
    title: string;
    carrouselItems: {
        title: string,
        desc: string,
        link: string,
        img: string
    }[]
}

export default function Carrousel({ title, carrouselItems }: CarrouselProps) {
    return (
        <section aria-label="Carrusel de destacados">
            <h2>{title}</h2>
            <div>
                {carrouselItems.map(item => (
                    <article >
                        <h3>Producto destacado 1</h3>
                        <p>Descripción del producto.</p>
                        <a href=""></a>
                    </article>
                ))}
            </div>

        </section>
    )
}