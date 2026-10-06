paises = ['Uzbequistão', 'Groelândia', 'Paquistão', 'Angola', 'Bahrein', 'Cabo Verde', 'França', 'Islândia', 'Honduras'];

function buscaPais(paises, pais) {
    for (let i = 0; i < paises.length; i++) {
        if (pais === paises[i]) {
            console.log(`País ${pais} foi encontrado na posição ${i}.`);
            return;
        }
    }
    console.log(`País ${pais} não foi encontrado.`);
}

buscaPais(paises, 'França');