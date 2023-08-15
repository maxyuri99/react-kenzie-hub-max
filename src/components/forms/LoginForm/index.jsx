import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { loginFormSchema } from "./loginFormSchema"
import { useState } from "react"

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
            navigate("/dashboard")
        } catch (error) {
            console.log(error.response?.data)
            if (error.response?.data.message === "Incorrect email / password combination") {
                alert("O email / senha não correspondem")
            }
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => {
        userLogin(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <InputPassword
                label="Senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <div>
                <button type="submit">
                    {loading ? "acessando..." : "Entrar"}
                </button>
                <p>Ainda não possui uma conta?</p>
                <Link to="/register" disabled={loading}>Cadastre-se</Link>
            </div>
        </form>
    )
}