let num = [3, 5, 7, 4, 2];
let cont = 0;

function ordenaNum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                cont++;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log('Números ordenados: ', ordenaNum(num));
console.log('Quantidade de trocas: ', cont);