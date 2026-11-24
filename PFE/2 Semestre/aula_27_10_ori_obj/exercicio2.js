class Bairro {
    nome;
    qtde_habitantes;
    qtde_casas;
    faixa_etaria;
    media_renda_familiar;
}

let novo_bairro = new Bairro();
novo_bairro.nome = 'Jardim das Flores';
novo_bairro.qtde_habitantes = 5000;
novo_bairro.qtde_casas = 1500;
novo_bairro.faixa_etaria = 'Adultos';
novo_bairro.media_renda_familiar = 3000;

console.log(novo_bairro);