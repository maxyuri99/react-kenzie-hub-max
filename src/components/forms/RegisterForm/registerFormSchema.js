import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório"),
    password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "São necessários pelo menos oito caracteres")
        .regex(/[A-Z]+/, "É nescessário conter pelo menos uma letra maiúscula")
        .regex(/[a-z]+/, "É nescessário conter pelo menos uma letra minúscula")
        .regex(/[0-9]+/, "É nescessário conter pelo menos um número")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?\\/]+/, "É nescessário conter pelo menos um caracter especial"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("É obrigatório adicionar uma biografia"),
    contact: z.string().nonempty("O contato é obrigatório")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
} )