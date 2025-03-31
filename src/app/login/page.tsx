import Forms from "@/components/Forms"
import styles from "./styles.module.css"

export default function Login() {

    return (
        <>
            <main className={styles.container}>
                <img src="/fotoLogin.png" className={styles.login} alt="Foto da Livraria"/>
                <div className={styles.info}>
                    <img src="/Logo (Stroke).png" className={styles.logo} alt="Foto da Livraria"/>
                    <div className={styles.welcome}>
                        <p>Bem vindo(a)!</p>
                        <h2>Entre na sua conta</h2>
                    </div>
                    <Forms/>
                </div>
            </main>
        </>
    )
}