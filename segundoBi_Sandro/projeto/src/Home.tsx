import "./styles/utility.css";
import Logo from "./assets/logo.svg";
import RetangleUm from "./assets/images/Rectangle1.png";
import RetangleDois from "./assets/images/Rectangle2.png";
import Menu from "./assets/icons/menu.svg";
import Close from "./assets/icons/close.svg";
import "./styles/header.css";
import "./styles/hero.css";
import { useState } from "react";
import Button from "./components/Button";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo da pagina" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#apresentacao">Apresentação</a>
                            </li>
                            <li>
                                <a href="#certificados">Certificados</a>
                            </li>
                            <li>
                                <a href="#experiencias">Experiências</a>
                            </li>
                            <li>
                                <a href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#apresentacao">Apresentação</a>
                                        </li>
                                        <li>
                                            <a href="#certificados">Certificados</a>
                                        </li>
                                        <li>
                                            <a href="#experiencias">Experiências</a>
                                        </li>
                                        <li>
                                            <a href="#contato">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <span className="desktop-only">
                <img src={RetangleDois} alt="Retangulo um tela inicial" />
            </span>
            <img src={RetangleUm} alt="Retangulo dois tela inicial" />

            <div className="container content">
                <p className="desktop-only">
                    Olá
                </p>
                <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                </p>
                <div className="flex gap-1">
                    <span><Button text="Cadastre-se" /></span>
                    <span className="desktop-only">
                        <Button text="Veja mais" secondary />
                    </span>
                </div>
            </div>
        </>
    )
}