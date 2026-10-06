let alunos = [
    { numero: 3, nome: 'Malta' },
    { numero: 5, nome: 'Alfredo' },
    { numero: 7, nome: 'Brian' },
    { numero: 4, nome: 'Ana Alfreda' },
    { numero: 2, nome: 'Sueny' }
];

function ordenaAlunos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].nome > array[j + 1].nome) {
                let temp = array[j].nome;
                array[j].nome = array[j + 1].nome;
                array[j + 1].nome = temp;
            }
        }
    }
    return array;
}

console.log('Alunos ordenados: ', ordenaAlunos(alunos));