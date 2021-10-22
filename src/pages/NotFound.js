//import NotFoundImg from "../404_amarillo.jpg"
import style from "./NotFound.module.css"

export const NotFound = () => {
    return (
        <div className={style.container}>
            
            <img className={style.img} src="https://image.freepik.com/vector-gratis/fondo-pagina-error-404-distorsion_23-2148090180.jpg" alt="./404_amarillo.jpg" />
        </div>
    )
}
