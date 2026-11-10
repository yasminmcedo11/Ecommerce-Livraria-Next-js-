# Livraria — E-commerce de Livros

Front-end de uma livraria online feito com **Next.js**, **React** e **TypeScript**. O site tem vitrine por
gênero, busca de livros, página de detalhes e tela de login com validação de formulário. Os livros vêm de uma
API REST simulada com o json-server.

## Funcionalidades

- **Página inicial:** banner de promoção e uma vitrine para cada gênero (Best-sellers, Clássicos, Fantasia,
  Infantil, Suspense, Distopia e Ficção Científica), com os 4 primeiros livros de cada um;
- **Página do gênero** (`/genres/[genre]`): aberta pelo botão **Ver mais**, lista todos os livros do gênero e
  tem um campo de busca por título que filtra enquanto você digita;
- **Detalhes do livro** (`/book/[id]`): capa, título, autor, sinopse e preço, com o botão
  **Adicionar ao carrinho**;
- **Login** (`/login`): formulário de e-mail e senha validado com React Hook Form e Zod. O e-mail precisa ser
  válido e a senha precisa ter no mínimo 6 caracteres. Ao entrar, você volta para a página inicial. A tela de
  login não mostra o cabeçalho do site;
- **Preços em reais:** formatados com `Intl.NumberFormat` (por exemplo, `R$ 39,90`).

## Tecnologias

| Para quê | Tecnologia |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, rotas dinâmicas e Server Components) |
| Interface | React 19 + TypeScript |
| Estilo | CSS Modules (um `styles.module.css` por página ou componente) |
| Formulários | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Requisições HTTP | [Axios](https://axios-http.com/) |
| API simulada | [json-server](https://github.com/typicode/json-server) |
| Ícones | [React Icons](https://react-icons.github.io/react-icons/) |

## Dados dos livros

O catálogo tem 67 livros e fica em [`livros.json`](livros.json). O json-server transforma esse arquivo numa API
REST em `http://localhost:5000`, com as rotas:

- `GET /livros`: todos os livros, usada na página inicial e na página do gênero;
- `GET /livros/:id`: um livro, usada na página de detalhes.

Cada livro tem o formato:

```json
{
  "id": 1,
  "titulo": "O Código Da Vinci",
  "autor": "Dan Brown",
  "genero": "Best-sellers",
  "preco": 39.90,
  "sinopse": "Robert Langdon, um professor de simbologia de Harvard...",
  "capa": "https://..."
}
```

Para adicionar um livro, inclua um novo item em `livros.json` com um `id` que ainda não exista e um `genero`
igual a um dos gêneros da vitrine.

## Executando localmente

Requer **Node.js 18.18** ou mais recente.

```bash
git clone https://github.com/yasminmcedo11/Ecommerce-Livraria-Next-js-.git
cd Ecommerce-Livraria-Next-js-
npm install
```

O site precisa de dois processos rodando ao mesmo tempo, cada um em um terminal:

```bash
# terminal 1: API dos livros em http://localhost:5000
npx json-server livros.json --port 5000

# terminal 2: site em http://localhost:3000
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador. Suba a API antes do site: a página
inicial e a de detalhes buscam os livros no servidor e não carregam sem ela.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | inicia o servidor de desenvolvimento |
| `npm run build` | gera a versão de produção (a API precisa estar rodando) |
| `npm run start` | serve a versão de produção (depois do `build`) |
| `npm run lint` | roda o linter do Next.js |

## Estrutura do repositório

```
livros.json                catálogo de livros, servido pelo json-server
public/                    banner, logo, ícones e imagem da tela de login
src/
  app/
    page.tsx               página inicial (banner e vitrines por gênero)
    book/[id]/             página de detalhes do livro
    genres/[genre]/        página do gênero, com busca por título
    login/                 tela de login
    layout.tsx             layout raiz com o cabeçalho
  components/
    Header/                cabeçalho e o controle que o esconde no login
    Sections/              vitrine de um gênero
    Forms/                 formulário de login com validação
    Buttons/               botões "Ver mais" e de envio
  hooks/Price.tsx          formatação de preço em reais
  services/api.ts          instância do Axios apontando para a API
```

## Autora

Yasmin Macedo — [GitHub](https://github.com/yasminmcedo11) ·
[LinkedIn](https://www.linkedin.com/in/yasmin-macedo-3ab01625a/)
