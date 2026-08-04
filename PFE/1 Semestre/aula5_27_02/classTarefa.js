class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }

    concluir() {
        this.concluida = true;
    }

    reabrir() {
        this.concluida = false;
    }
}

class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerPorTitulo(titulo) {
        this.tarefas = this.tarefas.filter(
            tarefa => tarefa.titulo !== titulo
        );
    }

    listar(concluidas = null) {
        return this.tarefas.filter(tarefa =>
            concluidas === null || tarefa.concluida === concluidas
        );
    }
}
const tarefasHoje = new ListaTarefas();
const tarefa1 = new Tarefa('Tarefa da Escola', 'Fazer a tarefa de matemática');
const tarefa2 = new Tarefa('Arrumar o Quarto', 'Arrumar a cama, varrer e passar pano');
const tarefa3 = new Tarefa('Trabalho em Grupo', 'Fazer o relatório do projeto');

tarefa1.concluir();
tarefasHoje.adicionar(tarefa1);
tarefasHoje.adicionar(tarefa2);
tarefasHoje.adicionar(tarefa3);
tarefasHoje.removerPorTitulo('Arrumar o Quarto');

console.log("Todas:");
console.log(tarefasHoje.listar());
console.log("Concluídas:");
console.log(tarefasHoje.listar(true));
console.log("Pendentes:");
console.log(tarefasHoje.listar(false));