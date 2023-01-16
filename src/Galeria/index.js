import "./Galeria.css"
import { fotosgaleria } from "../fotosgaleria"
import { Card } from "../Card"
import {useState} from 'react'

export const Galeria = () => {
    let [fotosFiltradas, setFotosFiltradas] = useState([fotosgaleria])
    const opcoesFiltro = ["Estrelas", "Galáxias", "Lua", "Planetas", "Todos"]

    function filtroDinamico(evento){
        if(evento.target.text === "Todos"){
            setFotosFiltradas(fotosgaleria)
        }else{
            setFotosFiltradas(fotosgaleria.filter(fotos => fotos.categoria === evento.target.text))
        }
    }

    return(
        <section className="secao-galeria">
            <h2 className="titulo-secao--galeria">Navegue pela galeria</h2>
            <div className="secao-galeria--filtros">
                <p className="secao-galeria--subtitulo">Busque por tags:</p>
                <div className="secao-galeria--opcoes">
                    {opcoesFiltro.map(opcao => 
                        <a  
                            className="links-filtro--galeria" 
                            key={opcao}
                            onClick={evento => filtroDinamico(evento)}>
                            {opcao}
                        </a>)}
                </div>
            </div>
            <div className="cards-galeria">
                {fotosFiltradas.map(foto => <Card key={foto.id} foto={foto}/>)}
            </div>
        </section>
    )
}