const express = require('express');
const router = express.Router();
const bd = require('../conexao');

router.get('/novo_ingrediente', async (req, res) => {
    try {
        res.render('novo_ingrediente');
    } catch (err) {
        res.status(500).send('Erro no servidor.');
    }
});

router.post('/cadastro', async (req, res) => {
    const { nome, valor, imagem } = req.body;

    try {
        const resultadoIngrediente = await bd.query(
            `INSERT INTO ingredientes (nome, valor, imagem)
             VALUES ($1, $2, $3)
             RETURNING id_ingrediente`,
            [nome, valor, imagem]
        );

        const mensagem = 'Ingrediente criado com sucesso!';
        res.redirect(`/ingredientes/listar?mensagem=${encodeURIComponent(mensagem)}`);

    } catch (err) {
        res.status(500).send('Erro no servidor ao cadastrar ingrediente.');
    }
});

router.get('/listar', async (req, res) => {
    try {
        const mensagem = req.query.mensagem || '';

        const resultado = await bd.query(`
            SELECT id_ingrediente, nome, valor, imagem
            FROM ingredientes
            ORDER BY id_ingrediente ASC
        `);

        res.render('ingrediente', { ingredientes: resultado.rows, mensagem });

    } catch (err) {
        res.status(500).send('Erro ao listar ingredientes.');
    }
});

router.post('/pesquisar', async (req, res) => {
    try {
        const { pesquisa } = req.body;

        const resultado = await bd.query(
            `SELECT id_ingrediente, nome, valor, imagem
             FROM ingredientes
             WHERE nome ILIKE $1`,
            [`%${pesquisa}%`]
        );

        res.render('ingrediente', { ingredientes: resultado.rows, mensagem: "" });

    } catch (err) {
        res.status(500).send('Erro no servidor ao pesquisar ingredientes.');
    }
});

router.get('/alterar/:id_ingrediente', async (req, res) => {
    const { id_ingrediente } = req.params;

    try {
        const resultado = await bd.query(
            `SELECT id_ingrediente, nome, valor, imagem
             FROM ingredientes
             WHERE id_ingrediente = $1`,
            [id_ingrediente]
        );

        if (resultado.rows.length > 0) {
            res.render('alterar_ingrediente', {
                ingrediente: resultado.rows[0]
            });
        } else {
            res.status(404).send('Ingrediente não encontrado.');
        }

    } catch (err) {
        res.status(500).send('Erro no servidor ao buscar ingrediente.');
    }
});

router.post('/alterar/:id_ingrediente', async (req, res) => {
    const { id_ingrediente } = req.params;
    const { nome, valor, imagem } = req.body;

    try {
        const query = `
            UPDATE ingredientes
            SET nome = $1, valor = $2, imagem = $3
            WHERE id_ingrediente = $4
        `;

        const valores = [nome, valor, imagem, id_ingrediente];

        await bd.query(query, valores);

        const mensagem = 'Ingrediente alterado com sucesso!';
        res.redirect(`/ingredientes/listar?mensagem=${encodeURIComponent(mensagem)}`);

    } catch (err) {
        res.status(500).send('Erro no servidor ao alterar ingrediente.');
    }
});

router.post('/excluir/:id_ingrediente', async (req, res) => {
    const { id_ingrediente } = req.params;

    try {
        await bd.query(
            'DELETE FROM ingredientes WHERE id_ingrediente = $1',
            [id_ingrediente]
        );

        const mensagem = 'Ingrediente excluído com sucesso!';
        res.redirect(`/ingredientes/listar?mensagem=${encodeURIComponent(mensagem)}`);

    } catch (err) {
        res.status(500).send('Erro no servidor ao excluir o ingrediente.');
    }
});

module.exports = router;