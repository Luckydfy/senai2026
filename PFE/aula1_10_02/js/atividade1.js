let nome = 'Fernanda';

const corpo = document.getElementById('corpo');
const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
const pop = document.getElementById('pop');

titulo.textContent += ', ' + nome + '!';
texto.textContent = 'Esta é uma atividade sobre DOM';

corpo.style.backgroundColor = 'rebeccapurple';
corpo.style.color = 'white';
corpo.style.justifyItems = 'center';

pop.style.backgroundColor = 'white';
pop.style.color = 'deepskyblue';
pop.style.borderRadius = '10px';
pop.style.width = '24rem';
pop.style.height = '14rem';
pop.style.alignContent = 'center';
pop.style.justifyItems = 'center';
pop.style.fontSize = '2rem';