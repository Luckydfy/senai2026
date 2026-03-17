const express = require('express');
const router = express.Router();
const bd = require('../conexao');

router.get('/', async (req, res) => {

    const ingredientes = await bd.query(
        'SELECT * FROM ingredientes ORDER BY nome'
    );

    res.render('ingredientes', { ingredientes: ingredientes.rows });
});

router.get('/novo', (req, res) => {
    res.render('novo_ingrediente');
});

router.post('/novo', async (req, res) => {

    const { nome, unidade, preco } = req.body;

    await bd.query(
        'INSERT INTO ingredientes (nome, unidade, preco_unitario) VALUES ($1,$2,$3)',
        [nome, unidade, preco]
    );

    res.redirect('/ingredientes');
});

module.exports = router;