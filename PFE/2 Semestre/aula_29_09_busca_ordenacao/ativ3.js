let notas = [8, 9, 10, 7, 8, 6, 7, 9, 10, 5];
let cont = 0;

function nota10(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 10) {
            cont++;
        }
    }
    console.log(`Total de notas 10 encontradas: ${cont}`);
    return;
}

nota10(notas);