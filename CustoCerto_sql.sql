-- Projeto - CustoCerto --
-- Tabela Usuários --
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(20) DEFAULT 'funcionario',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adm --
INSERT INTO usuarios (nome, email, senha, tipo_usuario)
VALUES ('Admin', 'admin@email.com', '123', 'admin');

-- Tabela Ingredientes --
CREATE TABLE ingredientes (
    id_ingrediente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    unidade VARCHAR(20) NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Receitas --
CREATE TABLE receitas (
    id_receita SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    rendimento INTEGER NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Receita e Ingredientes --
CREATE TABLE receita_ingredientes (
    id SERIAL PRIMARY KEY,
    id_receita INTEGER REFERENCES receitas(id_receita) ON DELETE CASCADE,
    id_ingrediente INTEGER REFERENCES ingredientes(id_ingrediente),
    quantidade NUMERIC(10,3) NOT NULL
);

-- Tabela Mão de Obra --
CREATE TABLE mao_obra (
    id SERIAL PRIMARY KEY,
    id_receita INTEGER REFERENCES receitas(id_receita) ON DELETE CASCADE,
    tempo_minutos INTEGER NOT NULL,
    custo_hora NUMERIC(10,2) NOT NULL
);

-- Tabela Custos Fixos --
CREATE TABLE custos_fixos (
    id_custo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor NUMERIC(10,2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Produção --
CREATE TABLE producao (
    id_producao SERIAL PRIMARY KEY,
    id_receita INTEGER REFERENCES receitas(id_receita),
    quantidade INTEGER NOT NULL,
    preco_venda NUMERIC(10,2),
    data_producao DATE DEFAULT CURRENT_DATE
);

-- Calcular custo da receita --
SELECT 
r.nome,
SUM(ri.quantidade * i.preco_unitario) AS custo_total
FROM receitas r
JOIN receita_ingredientes ri ON r.id_receita = ri.id_receita
JOIN ingredientes i ON ri.id_ingrediente = i.id_ingrediente
GROUP BY r.nome;

-- Calcular custo por unidade --
SELECT 
r.nome,
SUM(ri.quantidade * i.preco_unitario) / r.rendimento AS custo_por_unidade
FROM receitas r
JOIN receita_ingredientes ri ON r.id_receita = ri.id_receita
JOIN ingredientes i ON ri.id_ingrediente = i.id_ingrediente
GROUP BY r.nome, r.rendimento;