import Link from "next/link"
import styles from "./styles.module.css"


export default function Header() {
    return (
        <header className={styles.container}>
            <nav>
                <Link href="/">
                    <img className={styles.logo} 
                        src="Logo (Stroke).png" 
                        alt="Logo da Livraria"
                    />
                </Link>
                <div>
                    <Link href="/login">
                        <button className={styles.buttons}>
                            <img src="Profile.png" alt="Logo de Perfil"/>
                        </button>
                    </Link>
                    <button className={styles.buttons}>
                        <img src="Shop.png" alt="Logo do Shop"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}