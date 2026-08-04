class Pessoa {
    // Encapsulamento
    nome; // Atributo público
    #cpf; // Atributo privado
    #salario; // Atributo privado

    // Métodos getters e setters para acessar os atributos privados
    setCpf(valor) {
        this.#cpf = valor;
    }
    getCpf() {
        return this.#cpf;
    }
    setSalario(valor) {
        this.#salario = valor;
    }
    getSalario() {
        return this.#salario;
    }
}
const silva = new Pessoa();
silva.nome = "Pedro";
silva.setCpf("987.654.321-00");
silva.setSalario(6000);
console.log(silva);