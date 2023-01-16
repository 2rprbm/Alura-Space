import './App.css';
import { Banner } from './Banner';
import { Header } from './Header';
import { Populares } from './Populares';
import { Galeria } from './Galeria';
import { Footer } from './Footer';
import { MenuLateral } from './MenuLateral/Menu';
import imagembanner from "./Imagens/banner.png";

function App() {
  return (
    <>
      <Header />
      <main className="secao-principal">
        <MenuLateral className="secao-principal--menu"/>
        <Banner imagem={imagembanner}/>
        <Galeria />
        <Populares />
      </main>
      <Footer />
    </>
  )
}

export default App;
