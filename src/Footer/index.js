import "./Footer.css"
import {iconesredessociais} from "../iconesredessociais.js" 

export const Footer = () => {
    return(
        <footer className="rodape">
            <div>
                {iconesredessociais.map(icone => <img key={icone} className="icone" src={icone} alt="Icone Redes Sociais"></img>)}
            </div>
            <span className="rodape-texto">Desenvolvido por Raphael Rodrigues</span>
        </footer>
    )
}