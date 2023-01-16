import "./Banner.css"

export const Banner = (props) => {
    return (
        <section className="banner">
            <img className="banner-imagem" src={props.imagem} alt="Banner"/>
            <h1 className="banner-chamada">A galeria mais completa de fotos do espaço!</h1>
        </section>
    )
}