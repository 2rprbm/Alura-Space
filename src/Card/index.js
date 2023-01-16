import "./Card.css"

export const Card = (props) => {
    return (
        <div className="card-individual">
            <img src={props.foto.caminhoImagem} alt="Foto de um universo"></img>
            <h4 className="card-titulo">{props.foto.tituloImagem}</h4>
            <div className="card-infos">
                <span className="card-subtitulo">{props.foto.fonteImagem}</span>
                <div className="icones">
                    <img className="icone-card" src={props.foto.iconeFavoritar}></img>
                    <img className="icone-card" src={props.foto.iconeSalvar}></img>
                </div>
            </div>

        </div>
    )
}