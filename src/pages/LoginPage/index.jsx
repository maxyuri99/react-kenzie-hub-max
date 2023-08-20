import Logo from "../../assets/Logo.svg"
import { LoginForm } from "../../components/forms/LoginForm"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import styles from "./style.module.scss"

export const LoginPage = ({ setUser }) => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container">
                <div className={styles.flexBox}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <div>
                        <h1 className="title center small">Login</h1>
                        <LoginForm setUser={setUser} />
                    </div>
                </div>
            </div>
        </main>
    )
}