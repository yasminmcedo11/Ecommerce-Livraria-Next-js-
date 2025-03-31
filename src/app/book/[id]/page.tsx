import styles from "./styles.module.css"
import api from "../../../services/api"
import formatarPreco from "../../../hooks/Price";
import { FaChevronLeft } from "react-icons/fa";
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

export default async function Book( {params}: { params: Promise<{id: string}>} ) {
    const { id } = await params

    const response = await api.get<Livro>(`/livros/${id}`)
    const book = response.data

    if (!book) {
        return
    }

    return (
        <>
            <section className={styles.section}>
                <Link href="/">
                    <h2 > <FaChevronLeft size={16} /> Detalhes do Livro</h2>
                </Link>
                <div className={styles.container}>
                    <div className={styles.foto}>
                        <img src={book.capa} className={styles.foto} alt="Capa do Livro"/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <h2>{book.titulo}</h2>
                            <p>{book.autor}</p>
                        </div>
                        <div className={styles.sinopse}>
                            <h3>Sinopse</h3>
                            <p>{book.sinopse}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                <button>
                    <span>{formatarPreco(book.preco)}</span>Adicionar ao carrinho 
                </button>
                </div>
            </section>
        
        </>
    )
}