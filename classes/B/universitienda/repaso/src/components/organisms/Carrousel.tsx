type CarroselItem = {
    img: string;
    text: string;
    description: string;
}

type CarrouselProps = {
    text: string;
    carrouselItems: CarroselItem[];
}

export default function Carrousel({ text, carrouselItems }: CarrouselProps) {
    return (
        <section aria-label="Carrusel de destacados">
            <h2>{text}</h2>
            <div>
                {carrouselItems.map(item => (
                    <article >
                        <img src={item.img} alt="" />
                        <h3>{item.text}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}

            </div>


        </section>
    )
}