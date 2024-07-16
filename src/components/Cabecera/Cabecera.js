import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> <span>AluraFlix</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                   Favoritos
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                   Nuevo Video
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera