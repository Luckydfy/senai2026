const estudantes = [
    {id:1, nome: 'Ellefer', idade: 17, ra: 1784, disciplina: 'Ed. Física'},
    {id: 2, nome: 'Luiz Otávio', idade: 17, ra: 1728, disciplina: 'Língua Portuguesa'},
    {id:3, nome: 'Maria Eduarda', idade: 17, ra: 1890, disciplina: 'Ed. Física'}
]

export default function ListaFilter({ titulo }) {

    const lista = estudantes.filter(estudante => estudante.disciplina == 'Ed. Física');

    const listaEstudantes = lista.map((estudante) => {
        return (
            <li key={estudante.id}>
                <h3>Nome: {estudante.nome}</h3>
                <p>Idade: {estudante.idade}</p>
                <p>RA: {estudante.ra}</p>
            </li>
        );
    });

    return (
        <>
            <h1>{titulo}</h1>
            <ul>
                {listaEstudantes}
            </ul>
        </>
    );
}