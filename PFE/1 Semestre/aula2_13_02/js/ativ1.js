const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('#texto');
const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
const botao = document.querySelector('.botao');

corpo.style.backgroundColor = 'rebeccapurple';
corpo.style.color = 'white';

titulo.textContent = 'Atividade 1'

let subtitulo = '<h2>Esta é a Atividade 1</h2>';
container.innerHTML = subtitulo;

let imagem = '<img src="https://img.freepik.com/fotos-gratis/por-do-sol-no-arroz-fazenda-campo-tailandia_1150-17920.jpg?semt=ais_user_personalization&w=740&q=80" alt="">';
container2.innerHTML += imagem;

container.style.display = 'flex';
container.style.width = '94%';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';  
container2.style.display = 'flex';
container2.style.width = '94%';
container2.style.justifyContent = 'center';
container2.style.alignItems = 'center';  

let contador = 0;
botao.addEventListener('click', () => {
    contador++;
    alert('Você clicou no botão ' + contador + ' vezes');
});