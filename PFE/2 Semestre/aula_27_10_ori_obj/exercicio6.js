class Pessoa {
    constructor(nome, idade, profissao, cidade, renda) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.cidade = cidade;
        this.renda = renda;
    }

    apresentar() {
        if (this.idade > 60) {
            this.renda = this.renda * 1.05;
        }
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}, Cidade: ${this.cidade}, Renda: ${this.renda}`);
    }
}

let pessoa1 = new Pessoa("João", 65, "Aposentado", "São Paulo", 3000);
let pessoa2 = new Pessoa("Maria", 30, "Engenheira", "Rio de Janeiro", 8000);
let pessoa3 = new Pessoa("Carlos", 45, "Professor", "Belo Horizonte", 5000);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();