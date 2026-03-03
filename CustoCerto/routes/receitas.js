const express = require('express');
const router = express.Router();
const bd = require('../conexao');

// Página nova receita
router.get('/nova_receita', async (req, res) => {
    try {
        const produtos = await bd.query('SELECT id_produto, nome FROM produtos');
        res.render('nova_receita', { produtos: produtos.rows });
    } catch (err) {
        res.status(500).send('Erro ao carregar página.');
    }
});

// Cadastro da receita
router.post('/cadastro', async (req, res) => {
    const { nome, modo_preparo, produtos } = req.body;

    try {
        // Cria receita
        const resultado = await bd.query(
            `INSERT INTO receitas (nome, modo_preparo)
             VALUES ($1, $2)
             RETURNING id_receita`,
            [nome, modo_preparo]
        );

        const id_receita = resultado.rows[0].id_receita;

        // Inserir produtos relacionados
        if (Array.isArray(produtos)) {
            for (let item of produtos) {
                await bd.query(
                    `INSERT INTO receita_produtos (id_receita, id_produto, quantidade)
                     VALUES ($1, $2, $3)`,
                    [id_receita, item.id_produto, item.quantidade]
                );
            }
        }

        res.redirect('/receitas/listar');

    } catch (err) {
        res.status(500).send('Erro ao cadastrar receita.');
    }
});

// Listar receitas
router.get('/listar', async (req, res) => {
    try {
        const receitas = await bd.query('SELECT * FROM receitas ORDER BY id_receita ASC');
        res.render('receitas', { receitas: receitas.rows });
    } catch (err) {
        res.status(500).send('Erro ao listar receitas.');
    }
});

// Excluir receita
router.post('/excluir/:id_receita', async (req, res) => {
    const { id_receita } = req.params;
    try {
        await bd.query('DELETE FROM receitas WHERE id_receita = $1', [id_receita]);
        res.redirect('/receitas/listar');
    } catch (err) {
        res.status(500).send('Erro ao excluir receita.');
    }
});

module.exports = router;