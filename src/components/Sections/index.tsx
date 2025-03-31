import ShowMoreButton from "../Buttons/ShowMoreButtons";
import styles from "./styles.module.css"
import formatarPreco from "../../hooks/Price";
import Link from "next/link";


interface Livro {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

interface SectionsProps {
    genre: string
    livros: Livro[]
}

export default async function Sections({ genre, livros }: SectionsProps){
    const generoLivro = genre

    return (
        <> 
            <section className={styles.section}>
                <div className={styles.indice}>
                    <h2>{generoLivro}</h2>
                    <ShowMoreButton genre={generoLivro}/>
                </div>
                <div>
                    <ul className={styles.lista}>
                    {livros.map((livro, index) => (
                        <li key={index}>
                            <Link href={`/book/${livro.id}`}>
                            <img src={livro.capa} className={styles.foto} alt="Capa do Livro"/>
                            <div className={styles.container}>
                                <div>
                                    <h2>{livro.titulo}</h2>
                                    <p>{livro.autor}</p>
                                </div>
                                <p>{formatarPreco(livro.preco)}</p>
                            </div>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </>
    )
}