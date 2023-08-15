import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { RegisterForm } from "../../components/forms/RegisterForm"

export const RegisterPage = () => {
    return (
        <main>
            <div className="container">
                <div>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <Link to="/">Voltar</Link>
                </div>
                <div>
                    <h1>Crie sua conta</h1>
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}