import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { loginFormSchema } from "./loginFormSchema"
import { useState } from "react"
import { toast } from "react-toastify"
import styles from "./style.module.scss"

export const LoginForm = ({ setUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const userLogin = async (formData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            reset()
            toast.success("Login efeturado com sucesso.")
            navigate("/dashboard")
        } catch (error) {
            if (error.response?.data.message === "Incorrect email / password combination") {
                toast.error("O email / senha não correspondem")
            } else {
                toast.error(error.response?.data.message)
            }
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => {
        userLogin(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.flexBox}>
            <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
                placeholder="Digite seu email"
            />
            <InputPassword
                label="Senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
                placeholder="Digite sua senha"
            />
            <div>
                <button type="submit" className={loading? "btn solid primary disabled full" : "btn solid primary full"}>
                    {loading ? "acessando..." : "Entrar"}
                </button>
                <p className="paragraph grey1 small center">Ainda não possui uma conta?</p>
                <Link to="/register" disabled={loading}
                className={loading? "btn solid grey1 disabled full" : "btn solid grey1 full"}>Cadastre-se</Link>
            </div>
        </form>
    )
}