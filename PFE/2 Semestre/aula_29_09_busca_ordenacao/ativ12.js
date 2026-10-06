let salarios = [2300, 3000, 2900, 2500, 5500, 2700, 2600, 7800, 2200, 1500];

function newsort(array, left, right){    
    for(var i = left; i < right; ++i){
        var max = i;
        for (var j = i; j < right; ++j){
            if (array[max] < array[j]){
                max = j;
            }
        }

        var temp = array[max];
        array[max] = array[i];
        array[i] = temp;  
    }
    return array;
}

console.log('Salários ordenados (decrescente): ', newsort(salarios, 0, salarios.length));