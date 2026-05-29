// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); 

// --- VINCULA O ARQUIVO USUARIOS.JS AQUI ---
// Isso diz ao Express: "Qualquer requisição que comece com /api/usuarios deve ser tratada pelo arquivo usuarios.js"
app.use('/api/usuarios', require('./routes/usuarios')); // Ajuste o caminho do arquivo se necessário

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});