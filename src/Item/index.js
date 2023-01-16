import "./Item.css"

export const Item = (props) => {
    return (
        <li className="item">
            <img className="item-imagem" src={props.icone} alt={`Icone {props.nome}`}></img>
            <a href="#" className="item-link">{props.nome}</a>
        </li>
    )
}