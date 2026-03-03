const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bd = require('../conexao');

// Rota para a página de login
router.get('/login', (req, res) => {
    res.render('login', { mensagem: ''});
});

// Rota para processar o login
router.post('/login', async(req, res) => {
    const { usuario, senha } = req.body; // Busca as informações do arquivo EJS

    try {
        const resultado = await bd.query('SELECT * FROM usuarios WHERE usuario = $1', [usuario])
        const usuarioSel = resultado.rows[0];

        if (usuarioSel && bcrypt.compareSync(senha, usuarioSel.senha)) {
            req.session.regenerate(err => {
                if (err) {
                    console.error('Erro ao regenerar sessão:', err);
                    return res.status(500).send('Erro no Servidor');
                }
                req.session.user = {
                    id_usuario: usuarioSel.id_usuario,
                    usuario: usuarioSel.usuario
                };
                req.session.save(() => res.redirect('/'));
            });
        }
        else {
            res.status(401).render('index', { mensagem: 'Usuário ou senha inválidos'});
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
    }
});

// Rota para a página de cadastro
router.get('/novo_usuario', (req, res) => {
    res.render('novo_usuario');
});

// Rota para efetuar o cadastro
router.post('/cadastro', async(req, res) => {
    const { usuario, nome, senha } = req.body;

    const saltRounds = 10;
    const senhaCripto = await bcrypt.hash(senha, saltRounds);

    try {
        await bd.query('INSERT INTO usuarios (usuario, nome, senha) VALUES ($1, $2, $3)', [usuario, nome, senhaCripto]);
        res.render('login', {mensagem: 'Usuário criado com sucesso!'})
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

// Rota para a listagem de usuários
router.get('/listar', async(req, res) => {
    try {
        const mensagem = req.query.mensagem;

        const resultado = await bd.query('SELECT id_usuario, nome, usuario FROM usuarios');
        res.render('usuario', {
            usuarios: resultado.rows,
            mensagem: mensagem
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor ao listar usuários.');
    }
});

// Rota para pesquisar usuários
router.post('/pesquisar', async(req, res) => {
    try {
        const {pesquisa} = req.body;

        const resultado = await bd.query('SELECT id_usuario, nome, usuario FROM usuarios WHERE nome ILIKE $1', [`%${pesquisa}%`]);
        
        res.render('usuario', {
            usuarios: resultado.rows,
            mensagem: ""
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro no servidor ao pesquisar usuário.');
    }
});

// Rota para abrir a tela de alteração de usuários
router.get('/alterar/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;

    try {
        const resultado = await bd.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id_usuario]);
        
        if (resultado.rows.length > 0) {
            res.render('alterar_usuario', {usuario: resultado.rows[0]});
        }
        else {
            res.status(404).send('Usuário não encontrado.');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro ao abrir página de alteração.');
    }
});

// Rota para incluir a alteração no banco de dados
router.post('/alterar/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;
    const { nome, usuario, senha } = req.body;

    try {
        const saltRounds = 10;
        const senhaCripto = await bcrypt.hash(senha, saltRounds);

        await bd.query('UPDATE usuarios SET nome = $1, usuario = $2, senha = $3 WHERE id_usuario = $4', [nome, usuario, senhaCripto, id_usuario]);
        
        const resultado = await bd.query('SELECT id_usuario, nome, usuario FROM usuarios');
        const mensagem = 'Usuário alterado com sucesso!';
        res.redirect(`/usuarios/listar?mensagem=${mensagem}`);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Erro ao alterar usuário.');
    }
});

// Rota para excluir um usuário
router.post('/excluir/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;

    try {
        await bd.query('DELETE FROM usuarios WHERE id_usuario = $1', [id_usuario]);
        
        const mensagem = 'Usuário excluido com sucesso!';
        res.redirect(`/usuarios/listar?mensagem=${mensagem}`);
    }
    catch (err) {
        console.error('Erro ao excluir o usuário: ', err);
        res.status(500).send('Erro ao alterar usuário.');
    }
});

module.exports = router;