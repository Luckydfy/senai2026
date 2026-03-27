const frutas = ["Maçã", "Banana", "Pêra", "Abacaxi", "Manga"];

export default function ListaFrutas() {
    const listaFrutas = frutas.map((fruta) => {
        return <li>
            <p>{fruta}</p>
        </li>
    })
    return (
        <ul>
            {listaFrutas}
        </ul>
    )
}