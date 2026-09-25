const prompt = require('prompt-sync')();
let atividade = Number(prompt('Digite o número da atividade: '));
console.log();

// Atividade 1
if (atividade == 1) {
    let fila = [];
    fila.push('Cliente1');
    fila.push('Cliente2');
    fila.push('Cliente3');
    console.log('Fila atual: ', fila);
    fila.shift();
    console.log('Fila atual: ', fila);
    fila.shift();
    console.log('Fila atual: ', fila);
    fila.shift();
    console.log('Fila atual: ', fila);
}
// Atividade 2
if (atividade == 2) {
    let tarefas = ['acordar', 'tomar banho', 'escovar os dentes', 'café da manhã', 'ir para o trabalho'];
    for (let i = 0; i < tarefas.length; i++) {
        console.log('A próxima tarefa é: ', tarefas[i]);
    }
}
// Atividade 3
if (atividade == 3) {
    let lista = ['Nome1', 'Nome2', 'Nome3', 'Nome4', 'Nome5'];
    while (lista.length > 0) {
        console.log('Fila atual: ', lista);
        lista.shift();
    }
    console.log('A fila está vazia.');
}
// Atividade 4
if (atividade == 4) {
    let fila = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4', 'Elemento5'];
    console.log('A quantidade de elementos na fila é: ', fila.length);
}
// Atividade 5
if (atividade == 5) {
    let docs = ['doc1', 'doc2', 'doc3', 'doc4', 'doc5'];
    while (docs.length > 0) {
        console.log('Fila atual: ', docs);
        docs.shift();
    }
    console.log('A fila está vazia.');
}
// Atividade 6
if (atividade == 6) {
    let pedidos = ['1', '2', '3', '4'];
    for (let i = 0; i < pedidos.length; i++) {
        console.log('Pedido ', pedidos[i], ' entregue!');
    }
}
// Atividade 7
if (atividade == 7) {
    let jogadores = ['Jogador 1', 'Jogador 2', 'Jogador 3', 'Jogador 4', 'Jogador 5'];
    console.log(jogadores);
    for (let i = 0; i < 3; i++) {
        let primeiro = jogadores.shift();
        jogadores.push(primeiro);
        console.log(jogadores);
    }
}
// Atividade 8
if (atividade == 8) {
    let elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];
    console.log(elementos);
    let sotnemele = elementos.reverse();
    console.log(sotnemele);
}
// Atividade 9
if (atividade == 9) {
    let nomes = ['Nome1', 'Nome2', 'Nome3', 'Nome4', 'Nome5'];
    console.log(nomes);
    nomes.push('Nome6', 'Nome7');
    console.log(nomes);
    nomes.shift();
    console.log(nomes);
}
// Atividade 10
if (atividade == 10) {
    let chamados = ['Chamado1', 'Chamado2', 'Chamado3'];
    console.log(chamados);
    for (let i = 0; i < 3; i++) {
        console.log('Chamado ', chamados.shift(), ' finalizado!');
    }
}
// Atividade 11
if (atividade == 11) {
    let fila = [];
    do {
        fila.push(prompt('Digite um nome para adicionar à fila: '));
    } while (fila.length < 5);
    prompt('Digite um nome para adicionar à fila: ');
    console.log('Fila cheia');
    console.log('Fila atual: ', fila);
}
// Atividade 12
if (atividade == 12) {
    let pilha = [];
    for (let i = 1; i <= 6; i++) {
        pilha.push(i*2);
    }
    console.log('Pilha atual: ', pilha);
}
// Atividade 13
if (atividade == 13) {
    let marcas = ['Marca1', 'Marca2', 'Marca3', 'Marca4', 'Marca5', 'Marca6'];
    console.log(marcas);
    let marca = marcas.shift();
    marcas.push(marca);
    marca = marcas.shift();
    marcas.push(marca);
    console.log(marcas);
}
// Atividade 14
if (atividade == 14) {
    let processos = ['1', '2', '3', '4', '5'];
    let num = 0;
    console.log('Processos atuais: ', processos);
    do {
        if (prompt('Deseja remover um processo? (s/n) ') == 's') {
            console.log('Processo ', processos.shift(), ' removido!');
            console.log('Processos atuais: ', processos);
        }
        else {
            num = -1;
        }
    } while (processos.length > 0 && num == 0);
}
// Atividade 15
if (atividade == 15) {
    let fila1 = ['Cliente1', 'Cliente2', 'Cliente3'];
    let fila2 = ['Cliente4', 'Cliente5', 'Cliente6'];
    let fila3 = [];
    console.log('Fila 1: ', fila1);
    console.log('Fila 2: ', fila2);
    for (let i = 0; i < 3; i++) {
        fila3.push(fila1.shift());
        fila3.push(fila2.shift());
    }
    console.log('Fila 3: ', fila3);
}