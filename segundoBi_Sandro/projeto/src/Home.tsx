import "./styles/utility.css";
import Logo from "./assets/logo.svg";
import RetangleUm from "./assets/images/Rectangle1.png";
import RetangleDois from "./assets/images/Rectangle2.png";
import ProfileImageOne from "./assets/images/_image.webp";
import Meci from "./assets/images/meci.jpeg";
import Cj from "./assets/images/cj.jpg";
import Menu from "./assets/icons/menu.svg";
import Close from "./assets/icons/close.svg";
import Proativ from "./assets/icons/proativ.svg";
import Relogio from "./assets/icons/relogio.svg";
import Inform from "./assets/icons/inform.svg";
import Star from "./assets/icons/estrela.svg";
import Check from "./assets/icons/check.svg";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/solution.css";
import "./styles/testimonials.css";
import "./styles/cartoesPricing.css";
import { useEffect, useState } from "react";
import Button from "./components/Button";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

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


            <section id="hero">
                <span className="desktop-only">
                    <img src={RetangleDois} alt="Retangulo um tela inicial" />
                </span>
                <img src={RetangleUm} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá, prazer! Meu nome é
                    </p>
                    <h1>Rafael Henrique Bertolini</h1>
                    <p>Nesse site farei uma apresentação breve sobre mim.
                    </p>
                    <div className="flex gap-1">
                        <Button text="Cadastre-se" />
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Apresentação</h2>
                        <span className="desktop-only">
                            <h2>aa</h2>
                        </span>
                    </span>
                    <p>
                        Aqui apresento minhas principais <strong>qualidades</strong> para você!
                    </p>
                </header>

                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Proativ} />
                        </span>
                        <div>
                            <h3>afsfs</h3>
                            <p>aaaa sfsdffsfssdf fssf sfghgdhjdfdgbnf hgdf ggfbfgewvdbsfe wev rgfdsfdefvds </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Relogio} />
                        </span>
                        <div>
                            <h3>adsf</h3>
                            <p>aaaaasdada da dff adfa dfdadsdfddafsgf hdgfdfsg df  dg dfg</p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Inform} />
                        </span>
                        <div>
                            <h3>afddfds</h3>
                            <p>aaaafdsf sf sdf sgfsdfgdfgdgd ggh gfhgfhgfhhfhfhjghjghjgdgfdgf  ddgfdgddgdg </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem sabe da qualidade do dev, recomenda:
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Slk, dev muito ruim kkkk
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Miranha</p>
                                <p>Amigão da vizinhança</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Cj} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente the worst que already vi!
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Carlos Joãoson</p>
                                <p>Oh shit, here go again</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Meci} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    O pior macaquito que já vi!
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Meçi careca</p>
                                <p>Filho da FIFA</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Slk, dev muito ruim kkkk
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Miranha</p>
                                <p>Amigão da vizinhança</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Cj} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente the worst que already vi!
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Carlos Joãoson</p>
                                <p>Oh shit, here go again</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Meci} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    O pior macaquito que já vi!
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Meçi careca</p>
                                <p>Filho da FIFA</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>
                                    <div className="pricing-card premium">
                    <span className="bonus">
                        <p>1º MÊS COM DESCONTO</p>
                    </span>
                    <span className="plan">
                        <h3>Premium</h3>
                        <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                    </span>
                    <span className="price">
                        <h2>R$ 89,90</h2>
                        <p>/mês</p>
                    </span>
                    <Button text="Pedir agora" key="premium" />
                    <span className="hr" />
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>2 Entregas</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>5 Refeições por semana</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>2 Sucos por semana</p>
                    </span>
                </div>
                </section>
            </section>
        </>
    )
}