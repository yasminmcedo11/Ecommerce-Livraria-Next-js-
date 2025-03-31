"use client"

import { useForm } from "react-hook-form"
import SubmitButton from "../Buttons/SubmitButtons"
import styles from "./styles.module.css"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
    email: z.string().nonempty("O email não pode ser vazio").email("Email inválido"),
    password: z.string().nonempty("A senha não pode ser vazia").min(6, "A senha deve ter no mínimo 6 caracteres")
})

type Login = z.infer<typeof loginSchema>

export default function Forms() {
    const {register, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm<Login>({
        resolver: zodResolver(loginSchema)
    })
    const router = useRouter()

    async function login(data: Login) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(data)
        reset()
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit(login)} className={styles.forms}>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <p>Email</p>
                    <input 
                        type="email"
                        placeholder="Digite seu email aqui"
                        {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>} 
                </div>
                <div className={styles.inputs}>
                    <p>Senha</p>
                    <input 
                        type="password"
                        placeholder="Digite sua senha aqui"
                        {...register("password")}
                    />  
                    {errors.password && <span>{errors.password.message}</span>} 
                </div>  
            </div>  
            <div className={styles.submits}>
                <SubmitButton 
                    disabled={isSubmitting} 
                    type="submit"
                    text={isSubmitting ? "Entrando...": "Entrar"} 
                /> 
                <SubmitButton 
                    className={styles.button} 
                    type="button"
                    text="Cadastre-se" 
                /> 
            </div>                  
        </form>
    )
}