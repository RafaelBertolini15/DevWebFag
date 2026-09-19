import './style.css'

function Header({ title, links }) {

    return (
        <header>
            <h1 className="h1">{title}</h1>
            <nav>
                <ul className="ul">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.texto}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;