class Caneta {
    cor = 'Amarela';
    marca = 'Faber Castell';
    ponta = 'Fina';
    qtdeTinta = 10; //ml
    tampa = true;

    escrever() {
        this.qtdeTinta -= 1;
        return 'Comecei a escrever';
    }

    // Criar um método siblinhar, que rece um parâmetro valor que vai representar a quantidade gasta de tinta ao sublinhar, desconte da quantidade de tinta e mostre a quantidade de tinta restante, porém não permita que seja subtraida se o valor for maior que a quantidade de tinta restante
    sublinhar(valor) {
        if (valor > this.qtdeTinta) {
            
            return 'Sem tinta suficiente';
        }
        this.qtdeTinta -= valor;
        return 'Sublinhado com sucesso';
    }

    // Criar método recarregar, que recebe um valor e soma a quantidade de tinta, considerando que a quantidade de tinta não pode ser maior que 15ml
    recarregar(valor) {
        if (this.qtdeTinta + valor <= 15) {
            this.qtdeTinta += valor;
        }
        return this.qtdeTinta;
    }

    getQtdeTinta() {
        return this.qtdeTinta;
    }
}

const canetaFina = new Caneta();
console.log(canetaFina);
console.log(canetaFina.escrever());
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(3));
console.log('A quantidade de tinta restante é: ' + canetaFina.getQtdeTinta() + 'ml');