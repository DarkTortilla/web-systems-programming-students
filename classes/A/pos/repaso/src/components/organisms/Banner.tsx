type BannerProps={
    title: string;
    text: string;
    link: string;
    textLink: string
}

export default function Banner({title, text, link, textLink}:BannerProps){
    return (
        <section>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={link}>{textLink}</a>
        </section>
    )
}