const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');

corpo.style.backgroundColor = 'rebeccapurple';
corpo.style.color = 'white';
corpo.style.display = 'flex';
corpo.style.flexDirection = 'column';

container.style.justifyContent = 'center';
container.style.alignItems = 'center';

let subtitulo = '<h2>Esta é a Atividade 1</h2>';
container.innerHTML = subtitulo;

let imagem = '<img src="https://img.freepik.com/fotos-gratis/por-do-sol-no-arroz-fazenda-campo-tailandia_1150-17920.jpg?semt=ais_user_personalization&w=740&q=80" alt="">';
container.innerHTML += imagem;

container.style.width = '94%';

botao.addEventListener('click', () => {
    titulo.textContent = 'Atividade 2';
});