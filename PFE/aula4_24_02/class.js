class Veiculo {
    // Atributos ou Características
    modelo = "SUV";
    marca = "Honda - HRV";
    ano = 2025;

    // Métodos ou ações
    dirigir() {
        console.log("Começou a se mover");
    }
    break() {
        console.log("Parou de se mover");
    }
}

// Instanciar ou criar um objeto
const carro = new Veiculo();
carro.dirigir();
carro.break();