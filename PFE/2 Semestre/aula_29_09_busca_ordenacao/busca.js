const jogos = ['Minecraft', 'Light', 'Free Fire', 'How to Fish', 'Valorant', 'PUBG'];

function buscaJogo(games, game) {
    for (let i = 0; i < games.length; i++) {
        if (game === games[i]) {
            console.log(`Jogo ${game} foi encontrado na posição ${i}.`);
            return;
        }
    }
    console.log(`Jogo ${game} não foi encontrado.`);
}

buscaJogo(jogos, 'Minecraft');