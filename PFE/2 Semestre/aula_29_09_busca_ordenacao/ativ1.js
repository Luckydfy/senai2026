function buscarIndice(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            console.log(`Número ${numero} encontrado na posição ${i}.`);
            return;
        }
    }
    console.log(`Número ${numero} não encontrado.`);
}

buscarIndice([10, 25, 30, 45, 50], 30);