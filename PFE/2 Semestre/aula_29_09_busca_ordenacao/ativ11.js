let temps = [23, 30, 29, 25, 28, 27, 26, 24, 22, 21];

function newsort(array, left, right){    
    for(var i= left; i < right; ++i){
        var min = i;
        for (var j = i; j < right; ++j){
            if (array[min] > array[j]){
                min = j;
            }
        }

        var temp = array[min];
        array[min] = array[i];
        array[i] = temp;  
    }
    return array;
}

console.log('Temperaturas ordenadas: ', newsort(temps, 0, temps.length));
