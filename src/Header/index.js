import logo from "../Imagens/Logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <header className="cabecalho">
            <img src={logo} alt="Logotipo da Alura Space"></img>
            <input className="cabecalho-input" type="search" placeholder="O que você procura?"></input>
        </header>
    )
}