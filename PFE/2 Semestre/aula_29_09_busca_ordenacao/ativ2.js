let usuarios = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function buscarUsuario(array, nome) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === nome) {
      return true;
    }
  }
  return false;
}

console.log(buscarUsuario(usuarios, 'Charlie'));