class Produto {
    nome;
    preco;
    estoque;

    constructor(nome, preco, estoque) {
        this.nome = nome;
        
        if (preco >= 0) {
            this.preco = preco;
        } 
        else {
            console.log('Preço inválido');
        }

        if (estoque >= 0) {
            this.estoque = estoque;
        } 
        else {
            console.log('Estoque inválido');
        }
    }

    aplicarDesconto(percentual) {
        if (percentual >= 0 && percentual <= 100) {
            this.preco -= this.preco * (percentual / 100);
        } else {
            console.log('Percentual inválido');
        }
    }
    
    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const batatinhas = new Produto('Batatinhas', 5, 24);
const bombons = new Produto('Bombons', 10, 12);

console.log(batatinhas);
console.log(bombons);