let produtos = [
    {nomeProduto: 'Carne', preco: 25.69},
    {nomeProduto: 'Vinho', preco: 50.99},
    {nomeProduto: 'Arroz', preco: 5.99},
    {nomeProduto: 'Feijão', preco: 7.49},
    {nomeProduto: 'Macarrão', preco: 3.99}
];

function produtoBarato(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].preco < 20) {
            console.log(`Primeiro produto barato encontrado: ${array[i].nomeProduto} - Preço: R$${array[i].preco}`);
            return;
        }
    }
    return null;
}

produtoBarato(produtos);