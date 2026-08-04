const estudantes = [
    {id:1, nome: 'Ellefer', idade: 17, ra: 1784, nota: 5},
    {id: 2, nome: 'Luiz Otávio', idade: 17, ra: 1728, nota: 9},
    {id:3, nome: 'Maria Eduarda', idade: 17, ra: 1890, nota: 8}
]

export default function ListaAlunos() {

    const lista = estudantes.filter(estudante => estudante.nota >= 7);

    const listaEstudantes = lista.map((estudante) => {
        return (
            <li key={estudante.id}>
                <h3>Nome: {estudante.nome}</h3>
                <p>Idade: {estudante.idade}</p>
                <p>RA: {estudante.ra}</p>
                <p>Nota: {estudante.nota}</p>
            </li>
        );
    });

    return (
        <ul>
            {listaEstudantes}
        </ul>
    );
}