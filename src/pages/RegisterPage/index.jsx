import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { RegisterForm } from "../../components/forms/RegisterForm"
import styles from "./styles.module.scss"
import pageStyles from "../../styles/modules/pageBox.module.scss"

export const RegisterPage = () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className={styles.flexBox}>
                    <div>
                        <img src={Logo} alt="Logo Kenzie Hub" />
                        <Link to="/" className="btn solid grey3 notFull">Voltar</Link>
                    </div>
                    <div>
                        <h1 className="title center">Crie sua conta</h1>
                        <p className="paragraph grey1 small center">Rapido e grátis, vamos nessa</p>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </main>
    )
}