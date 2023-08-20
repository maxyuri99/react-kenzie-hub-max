import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const Header = ({ userLogout }) => {
    return (
        <header>
            <div className="container">
                <div className={styles.flexBox}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <button onClick={() => userLogout()}
                    className="btn solid grey3 notFull">
                        Sair
                    </button>
                </div>
            </div>
        </header>
    )
}