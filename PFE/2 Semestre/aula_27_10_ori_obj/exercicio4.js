class Celular {
    marca;
    modelo;
    cor;
    bateria;

    ligar() {
        return 'O celular está ligado';
    }
    desligar() {
        return 'O celular está desligado';
    }
    carregarBateria(percentual) {
        if (percentual > 100) percentual = 100;
        if (percentual < 0) percentual = 0;
        this.bateria = percentual;
        return `Bateria carregada para ${percentual}%`;
    }
}

let meuCelular = new Celular();
meuCelular.marca = 'Samsung';
meuCelular.modelo = 'Galaxy S21';
meuCelular.cor = 'Preto';
meuCelular.bateria = 50;

console.log(meuCelular.ligar());
console.log(meuCelular.desligar());
console.log(meuCelular.carregarBateria(80));