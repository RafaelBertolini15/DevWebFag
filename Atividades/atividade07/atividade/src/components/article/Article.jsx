import './style.css'

function Article( { title, date, content, image, imageAlt }) {

    return (
        <article>
        <h2>
            {title}
        </h2>
        <time datetime="2026-07-31">{date}</time>
        <p>{content[0]}</p>
        <p>{content[1]}</p>
        <figure>
            <img src={image} alt={imageAlt} />
            <figcaption>{imageAlt}</figcaption>
        </figure>
    </article>
    )

}

export default Article;