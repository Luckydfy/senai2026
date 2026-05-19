const express = require('express');
const router = express.Router();
const bd = require('../conexao');

router.get('/', async (req, res) => {

    const receitas = await bd.query(
        'SELECT * FROM receitas ORDER BY nome'
    );

    res.render('receitas', { receitas: receitas.rows });
});

router.get('/nova', async (req, res) => {

    const ingredientes = await bd.query(
        'SELECT * FROM ingredientes'
    );

    res.render('nova_receita', {
        ingredientes: ingredientes.rows
    });
});

router.post('/nova', async (req, res) => {

    const { nome, rendimento } = req.body;

    const receita = await bd.query(
        'INSERT INTO receitas (nome, rendimento) VALUES ($1,$2) RETURNING id_receita',
        [nome, rendimento]
    );

    const id_receita = receita.rows[0].id_receita;

    res.redirect('/receitas');
});

module.exports = router;