import home from "../icones/home-ativo.png"
import maisCurtidas from "../icones/mais-curtidas-inativo.png"
import maisVisitas from "../icones/mais-vistas-inativo.png"
import novas from "../icones/novas-inativo.png"
import surpreenda from "../icones/surpreenda-me-inativo.png"
import { Item } from "../Item"
import "./MenuLateral.css"

export const MenuLateral = () => {
    
    const listaItensMenu = [
        {
            nome: "Ínicio",
            icone: home
        },   
        {
            nome: "Mais Vistas",
            icone: maisCurtidas
        },   
        {
            nome: "Mais Curtidas",
            icone: maisVisitas
        },   
        {
            nome: "Novas",
            icone: novas
        },   
        {
            nome: "Surpreenda-me",
            icone: surpreenda
        }   
    ]
    
    return (
        <ul className="lista-itens--menu">
            {listaItensMenu.map(item => {
                return <Item key={item.nome} nome={item.nome} icone={item.icone}/>
            })};       
        </ul>
    )
}