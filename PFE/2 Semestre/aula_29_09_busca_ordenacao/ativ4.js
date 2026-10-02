let contatos = [
    { nome: 'Ana', telefone: '18982828989' },
    { nome: 'João', telefone: '11971717171' },
    { nome: 'Maria', telefone: '21999999999' },
    { nome: 'Pedro', telefone: '31988888888' }
];

function buscarContato(array, nome) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nome === nome) {
            return array[i].telefone;
        }
    }
    console.log('Contato não encontrado');
}

console.log(buscarContato(contatos, 'Maria'));