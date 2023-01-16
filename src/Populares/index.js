import "./Populares.css"
import { fotospopulares } from "../fotospopulares"

export const Populares = () => {
    return(
        <section className="secao-populares">
            <h3 className="secao-populares--titulos">Populares</h3>
            {fotospopulares.map(foto => <img key={foto} className="imagem-populares" src={foto} alt="Foto Seção Populares"></img>)}
            <a href="#" className="botao-secao--populares">Ver mais</a>
        </section>
    )
}