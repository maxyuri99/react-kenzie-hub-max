import Logo from "../../assets/Logo.svg"

export const ErrorPage = () => {
    return (
        <main className="container">
            <img src={Logo} alt="Logo Kenzie Hub" />
            <h1 className="title">Erro: 404</h1>
            <p className="paragraph">Não foi possível encontrar a página!</p>
        </main>
    )
}