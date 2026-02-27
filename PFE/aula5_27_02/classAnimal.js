class Animal {
    especie;
    #genero;
    #qtdeIndividuos;
    #nome;

    constructor(especie, genero, qtdeIndividuos, nome) {
        this.especie = especie;
        this.#genero = genero;
        this.#qtdeIndividuos = qtdeIndividuos;
        this.#nome = nome;
    }

    // Método mostrar
    mostrar() {
        return 'Espécie: ' + this.especie + ', Gênero: ' + this.#genero + ', Quantidade de indivíduos: ' + this.#qtdeIndividuos + ', Nome: ' + this.#nome;
    }
}

const panda = new Animal("urso", "fêmea", 2, "Ying e Yang");
console.log(panda.mostrar());