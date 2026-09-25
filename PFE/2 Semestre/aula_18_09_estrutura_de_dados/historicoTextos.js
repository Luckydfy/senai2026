const prompt = require('prompt-sync')();

let palavras = [];
let palavra;
let decisao = 0;

while (decisao !== -1) {
    console.log('Caso queira sair do programa digite -1');
    console.log('Caso queira excluir a última palavra digitada, digite d, D, desfazer ou Desfazer');
    console.log();
    palavra = prompt('Digite uma palavra: ');
    console.log();
    if (palavra === '-1') {
        decisao = -1;
    }
    else if (palavra === 'd' || palavra === 'D' || palavra === 'desfazer' || palavra === 'Desfazer') {
        palavras.pop();
    }
    else {
        palavras.push(palavra);
    }
}

console.log('Palavras salvas:', palavras);