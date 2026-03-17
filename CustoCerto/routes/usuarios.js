const express = require('express');
const router = express.Router();
const bd = require('../conexao');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/login', async (req,res)=>{

    const { email, senha } = req.body;

    const resultado = await bd.query(
        'SELECT * FROM usuarios WHERE email=$1',
        [email]
    );

    if(resultado.rows.length == 0){
        return res.send("Usuário não encontrado");
    }

    const usuario = resultado.rows[0];

    if(usuario.senha !== senha){
        return res.send("Senha incorreta");
    }

    req.session.usuario = usuario;

    res.redirect('/dashboard');
});

router.get('/dashboard',(req,res)=>{

    if(!req.session.usuario){
        return res.redirect('/');
    }

    res.render('dashboard',{
        usuario: req.session.usuario
    });

});

module.exports = router;