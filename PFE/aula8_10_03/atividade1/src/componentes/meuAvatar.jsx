export default function MeuAvatar({ nome, idade, foto_perfil, estilo_musical, disciplina_favorita }) {
    return (
        <>
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <img src={foto_perfil} alt=''/>
            <p>Estilo Musical: {estilo_musical}</p>
            <p>Disciplina Favorita: {disciplina_favorita}</p>
        </>
    )
}