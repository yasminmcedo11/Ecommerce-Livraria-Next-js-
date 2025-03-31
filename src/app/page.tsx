import Sections from "@/components/Sections"
import styles from "./styles.module.css"
import api from "@/services/api"

interface Livro {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

interface SectionData {
    genre: string
    livros: Livro[]
}


export default async function Home() {

    const response = await api.get<Livro[]>("/livros")
    const allBooks = response.data
  
    const genres = [
      "Best-sellers",
      "Clássicos",
      "Fantasia",
      "Infantil",
      "Suspense",
      "Distopia",
      "Ficção científica",
    ]
  
    const sections = genres.map((genre) => ({
      genre,
      livros: allBooks
        .filter((livro) => livro.genero.toLowerCase() === genre.toLowerCase())
        .slice(0, 4)
    }))


    return (
        <>
            <section className={styles.banner}>
                <img src="/Banner.png" alt="Banner de Produtos"/>
                <p>25% de desconto <br/><span>nos livros do Paulo <br/>Coelho!</span></p>
            </section>
            {sections.map((section) => (
                <Sections
                    key={section.genre}
                    genre={section.genre}
                    livros={section.livros}
                />
            ))}
        </>
    )
}