import img from './assets/sp.png'
import './App.css'
import Article from './components/article/Article'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Footer from './components/footer/Footer'

function App() {

  const linksHeader = [
    { texto: "Home", href: "#" },
    { texto: "Sobre", href: "#" },
    { texto: "Contato", href: "#" }
  ]

  const linksAside = [
    { texto: "Flamengo é filho do São Paulo!", href: "#" },
    { texto: "São Paulo é o unico tri campeão mundial!", href: "#" },
    { texto: "Luciano melhor que Neymar!", href: "#" }
  ]

  return (
    <main>
      <Header 
        title="Titulo da minha página"
        links= {linksHeader}
      />

      <Aside 
        title= "Posts Relacionados"
        links= {linksAside}
      />

      <Article
        title="São Paulo é o maior time do Brasil!"
        date="31 de Julho de 2026"
        content={[
          "Entenda o porque do São Paulo ser o maior clube do Brasil!",
          "Titulos, idolos, tudo detalhado."
        ]}
        image={img}
        imageAlt="São Paulo Futebol Clube"
      />

      <Footer 
        title="&copy; 2026 - Todos os direitos reservados a mim!"
      />

    </main>
  )
}

export default App;
