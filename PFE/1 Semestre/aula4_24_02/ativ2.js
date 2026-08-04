class Cidade {
    qtdHabitantes = 30000;
    estado = "São Paulo";
    nome = "Mirandópolis";

    mostrar () {
        console.log(`A cidade de ${this.nome} tem ${this.qtdHabitantes} habitantes e fica no estado de ${this.estado}.`);
    }
}

const cidade = new Cidade();
cidade.mostrar();