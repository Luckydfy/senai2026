const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

/**
 * Inicialização e configuração do container do Express application
 */
const app = express();

// Middlewares Globais de Infraestrutura HTTP
app.use(cors());
app.use(express.json());

// Injeção de Roteamento Central
app.use(routes);

// Middlewares de Tratamento de Fluxos Excepcionais
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;