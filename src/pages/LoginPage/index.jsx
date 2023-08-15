import Logo from "../../assets/Logo.svg"
import { LoginForm } from "../../components/forms/LoginForm"

export const LoginPage = ({ setUser }) => {
    return (
        <main>
            <div className="container">
                <div>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <LoginForm setUser={setUser}/>
                </div>
            </div>
        </main>
    )
}