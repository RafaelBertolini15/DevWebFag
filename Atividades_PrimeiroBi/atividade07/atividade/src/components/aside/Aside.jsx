import './style.css'

function Aside ({ title, links }) {
    return (
        <aside className="aside">
            <h3>{title}</h3>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.texto}</a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside;