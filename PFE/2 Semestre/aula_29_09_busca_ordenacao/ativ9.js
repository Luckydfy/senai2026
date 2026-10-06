let carros = [
    {modelo: 'Civic', ano: 2020},
    {modelo: 'Corolla', ano: 2019},
    {modelo: 'Golf', ano: 2021},
    {modelo: 'Fiesta', ano: 2018},
    {modelo: 'Focus', ano: 2022}
];

function ordenaCarros(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].ano > array[j + 1].ano) {
                let temp = array[j].ano;
                array[j].ano = array[j + 1].ano;
                array[j + 1].ano = temp;
            }
        }
    }
    return array;
}

console.log('Carros ordenados: ', ordenaCarros(carros));