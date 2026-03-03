CREATE TABLE pokemons (
	imagem VARCHAR(255),
	nome VARCHAR(50),
	tipo VARCHAR(50),
	poder_principal VARCHAR(100),
	forca DECIMAL,
	evolucao VARCHAR(50),
	efetivo VARCHAR(100),
	fraqueza VARCHAR(100)
);

INSERT INTO pokemons (imagem, nome, tipo, poder_principal, forca, evolucao, efetivo, fraqueza) VALUES
	('https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png', 'Pikachu', 'Elétrico', 'Choque do Trovão', '55', 'Raichu', 'Água, Voador', 'Terra')
	('https://www.vhv.rs/dpng/d/49-495352_pokemon-bulbasaur-hd-png-download.png', 'Bulbasaur', 'Planta, Veneno', 'Chicote de Vinha', '49', 'Ivysaur', 'Água, Terra, Pedra', 'Fogo, Psíquico, Gelo, Voador')
	('https://i.pinimg.com/736x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg', 'Charmander', 'Fogo', 'Brasa', '52', 'Charmeleon', 'Planta, Inseto, Gelo, Aço', 'Água, Terra, Pedra')
	('https://www.pngplay.com/wp-content/uploads/12/Snorlax-Pokemon-PNG-Images-HD.png', 'Snorlax', 'Normal', 'Gordura Espessa', '110', 'Nenhuma',
'Nenhuma', 'Lutador')
	('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bJVnbJn0JBGs64uXFkU8O1H3Cejju7xznQ&s', 'Arcanine', 'Fogo', 'Lança-Chamas', '110', 'Nenhuma', 'Planta, Gelo, Inseto, Aço', 'Água, Terra, Pedra')

-- UPDATE pokemons
-- SET imagem = 'https://i.pinimg.com/736x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg'
-- WHERE nome = 'Charmander'
-- 	('https://www.vhv.rs/dpng/d/539-5391523_pokemon-png-image-eevee-pokemon-transparent-png.png', 'Eevee', 'Normal', 'Fuga', '55', 'Vaporeon, Jolteon, Flareon, Umbreon, Leafeon, Sylveon, Glaceon, Espeon',
-- 'Nenhuma', 'Lutador')

SELECT * FROM pokemons