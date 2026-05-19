const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        mensagem: 'Backend funcionando!'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando');
});