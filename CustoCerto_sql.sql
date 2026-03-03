-- Projeto - CustoCerto --
-- Tabela Usuários --
CREATE TABLE usuarios (
	id_usuario SERIAL PRIMARY KEY,
	usuario VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nome VARCHAR(50) NOT NULL
);
DROP TABLE usuarios;