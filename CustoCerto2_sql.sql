-- Tabela Usuários --
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Aqui guardaremos a hash gerada pelo Bcrypt
    tipo_usuario VARCHAR(20) DEFAULT 'funcionario',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adm --
INSERT INTO usuarios (nome, email, senha, tipo_usuario)
VALUES ('Admin', 'admin@email.com', '$2b$10$EPYtG6N81y4Y6V4fS3B2eOn9O6xZBxEThWvFfH0O6vA7vG5f8v6TC', 'admin');

delete from usuarios
where nome = 'Admin'

-- Tabela Ingredientes --
CREATE TABLE ingredientes (
    id_ingrediente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    unidade VARCHAR(20) NOT NULL, -- ex: 'kg', 'g', 'unidade', 'ml'
    preco_unitario NUMERIC(10,2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Receitas (Adicionado campos de mão de obra para simplificar) --
CREATE TABLE receitas (
    id_receita SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    rendimento INTEGER NOT NULL DEFAULT 1,
    descricao TEXT,
    tempo_preparo_minutos INTEGER DEFAULT 0,
    custo_hora_trabalho NUMERIC(10,2) DEFAULT 0.00, -- Custo da mão de obra para esta receita
    ativo BOOLEAN DEFAULT TRUE, -- Em vez de deletar, mudamos para FALSE
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Intermediária: Receita e Ingredientes --
CREATE TABLE receita_ingredientes (
    id SERIAL PRIMARY KEY,
    id_receita INTEGER REFERENCES receitas(id_receita) ON DELETE CASCADE,
    id_ingrediente INTEGER REFERENCES ingredientes(id_ingrediente) ON DELETE RESTRICT,
    quantidade NUMERIC(10,3) NOT NULL
);

-- Tabela Custos Fixos (Ótima para rateio de custos como luz, água) --
CREATE TABLE custos_fixos (
    id_custo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor NUMERIC(10,2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Produção (Histórico de vendas/fabricação) --
CREATE TABLE producao (
    id_producao SERIAL PRIMARY KEY,
    id_receita INTEGER REFERENCES receitas(id_receita) ON DELETE SET NULL, -- Se a receita sumir, o histórico fica
    quantidade INTEGER NOT NULL,
    preco_venda_unitario NUMERIC(10,2) NOT NULL, -- Preço praticado no dia
    custo_historico_unitario NUMERIC(10,2), -- Importante: Salvar o custo que ela tinha no dia da produção
    data_producao DATE DEFAULT CURRENT_DATE
);

WITH custo_ingredientes_cte AS (
    SELECT 
        id_receita,
        SUM(quantidade * preco_unitario) AS total_ingredientes
    FROM receita_ingredientes ri
    JOIN ingredientes i ON ri.id_ingrediente = i.id_ingrediente
    GROUP BY id_receita
)
SELECT 
    r.id_receita,
    r.nome,
    COALESCE(c.total_ingredientes, 0) AS custo_ingredientes,
    ROUND((r.tempo_preparo_minutos::NUMERIC / 60) * r.custo_hora_trabalho, 2) AS custo_mao_obra,
    ROUND(
        COALESCE(c.total_ingredientes, 0) + 
        ((r.tempo_preparo_minutos::NUMERIC / 60) * r.custo_hora_trabalho), 2
    ) AS custo_total_receita
FROM receitas r
LEFT JOIN custo_ingredientes_cte c ON r.id_receita = c.id_receita
WHERE r.ativo = TRUE;