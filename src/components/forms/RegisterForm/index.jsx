import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { Select } from "../Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { useState } from "react"
import { registerFormSchema } from "./registerFormSchema"

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    })
    const [selectedModule, setSelectedModule] = useState("1")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            navigate("/")
            alert("Cadastro realizado com sucesso!")
            console.log("Cadastro realizado com sucesso!")
        } catch (error) {
            if (error.response?.data.message) {
                alert("Usuário já cadastrado")
            }
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => {
        const dataWithModule = {
            ...formData,
            module: selectedModule,
        }
        console.log(dataWithModule)
        userRegister(dataWithModule)
    }

    const options = [
        { label: "Primeiro módulo (Introdução ao Frontend)", value: "1" },
        { label: "Segundo módulo (Frontend Avançado)", value: "2" },
        { label: "Terceiro módulo (Introdução ao Backend)", value: "3" },
        { label: "Quarto módulo (Backend Avançado)", value: "4" },
    ]

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Nome"
                type="text"
                {...register("name")}
                error={errors.name}
                disabled={loading}
                placeholder="Digite aqui seu nome"
            />

            <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
                placeholder="Digite aqui seu email"
            />

            <InputPassword
                label="Senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
                placeholder="Digite aqui sua senha"
            />

            <InputPassword
                label="Confirmar Senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading}
                placeholder="Digite novamente sua senha"
            />

            <Input
                label="Bio"
                type="text"
                {...register("bio")}
                error={errors.bio}
                disabled={loading}
                placeholder="Fale sobre você"
            />

            <Input
                label="Contato"
                type="text"
                {...register("contact")}
                error={errors.contact}
                disabled={loading}
                placeholder="Opção de contato"
            />

            <Select
                options={options}
                value={selectedModule}
                onChange={setSelectedModule}
                disabled={loading}
                placeholder="Selecione o módulo"
            />

            <div>
                <button type="submit">
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>


        </form>
    )
}