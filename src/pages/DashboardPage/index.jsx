
import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./style.module.scss"

export const DashboardPage = ({ user, userLogout }) => {
    return (
        <DefaultTemplate userLogout={userLogout}>
            <main>
                <div className={styles.flexBox}>
                    <div>
                        <div className="container">
                            <h1 className="title">Olá, {user?.name}</h1>
                            <p className="paragraph grey1">{user?.course_module}</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="title">Que pena! Estamos em desenvolvimento :(</h1>
                        <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
                    </div>
                </div>
            </main>
        </DefaultTemplate>
    )
}