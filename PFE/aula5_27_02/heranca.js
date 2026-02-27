class Jogador { //Classe mãe
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome() {
        return this.#nome;
    }
    getNumero() {
        return this.#numero;
    }
} // Classe mãe geralmente não é instanciada

class jogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, totalGols) {
        super(nome, numero); // Chama o construtor da classe mãe
        this.peDominante = peDominante;
        this.totalGols = totalGols;
    }

    fazerGol(qtde) {
        return this.totalGols += qtde;
    }

    mostrar() {
        return `O jogador ${this.getNome()}, camisa número ${this.getNumero()} tem o pé dominante: ${this.peDominante}, Total de Gols: ${this.totalGols}`;
    }
}

const jorge = new jogadorFutebol('Jorge', 10, 'Direito', 5);
console.log(jorge.mostrar());
console.log(jorge.fazerGol(2));
console.log(jorge.mostrar());