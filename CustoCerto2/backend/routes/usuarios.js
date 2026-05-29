const express = require('express');
const router = express.Router();

let usuarios = [];
// Variável de controle para garantir que o ID nunca se repita, mesmo após deleções
let proximoId = 1; 

// Listar Usuários
router.get('/', (req, res) => {
    res.status(200).json(usuarios);
});

// Criar Usuário
router.post('/', (req, res) => {
    const { nome, email, senha, confirmarSenha } = req.body;

    // VALIDAÇÕES (Alterado 'mensagem' para 'message' para bater com o Frontend)
    if (!nome || !email || !senha) {
        return res.status(400).json({
            message: 'Preencha todos os campos obrigatórios'
        });
    }

    // Se o frontend enviar a confirmação, validamos. Se não, ignoramos.
    if (confirmarSenha && senha !== confirmarSenha) {
        return res.status(400).json({
            message: 'As senhas não coincidem'
        });
    }

    // Verificar se o email já existe
    const usuarioExiste = usuarios.find(
        usuario => usuario.email === email
    );

    if (usuarioExiste) {
        return res.status(400).json({
            message: 'Este e-mail já está cadastrado'
        });
    }

    // Novo Usuário usando o ID incremental seguro
    const novoUsuario = {
        id: proximoId++,
        nome,
        email,
        senha // Em produção, lembre-se de usar uma biblioteca como bcrypt para mascarar a senha!
    };

    usuarios.push(novoUsuario);

    return res.status(201).json({
        message: 'Usuário criado com sucesso',
        usuario: novoUsuario
    });
});

// Excluir Usuário
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Usamos Number(id) para garantir a comparação estrita (===) com segurança
    const indice = usuarios.findIndex(
        usuario => usuario.id === Number(id)
    );

    if (indice === -1) {
        return res.status(404).json({
            message: 'Usuário não encontrado'
        });
    }

    usuarios.splice(indice, 1);

    return res.status(200).json({
        message: 'Usuário removido com sucesso'
    });
});

module.exports = router;