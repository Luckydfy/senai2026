class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    setModelo(modelo) {
        this.#modelo = modelo;
    }
    getModelo() {
        return this.#modelo;
    }
    setMarca(marca) {
        this.#marca = marca;
    }
    getMarca() {
        return this.#marca;
    }
    setCor(cor) {
        this.#cor = cor;
    }
    getCor() {
        return this.#cor;
    }
    setVelocidadeMaxima(velocidadeMaxima) {
        this.#velocidadeMaxima = velocidadeMaxima;
    }
    getVelocidadeMaxima() {
        if (this.#velocidadeMaxima < 35) {
            return this.#velocidadeMaxima;
        }
    }
}

const bicicleta = new Bicicleta();
bicicleta.setModelo("Mountain Bike");
bicicleta.setMarca("Trek");
bicicleta.setCor("Vermelha");
bicicleta.setVelocidadeMaxima(30);
console.log(bicicleta);