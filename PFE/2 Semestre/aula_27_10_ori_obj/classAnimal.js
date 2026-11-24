class Animal {
    classificacao;
    especie;
    tamanho;
    nomeCientifico;
    
    alimentar(qtde) {
        console.log(`Animal alimentado com ${qtde} kg de comida.`);
    }
    classificar(classe) {
        this.classificacao = classe;
    }
}

let cachorro = new Animal();
cachorro.classificar('Quadrúpede');
cachorro.especie = 'Vira-lata';
cachorro.tamanho = 'Pequeno';
cachorro.nomeCientifico = 'Canis lupus';
cachorro.alimentar('500g');

console.log(cachorro);