// [F1] Carregar as dependências (módulos do projeto)
// Express: criar servidor e  rotas
const express = require('express');
// Axios: faz requisições HTTP para APIs externas
const axios = require('axios');
// CORS: libera o front-end (outras origens) para acessar o back-end
const cors = require('cors');

// [F2] Criar a aplicação (instância do servidor)
const app = express();

// [F3] Configurar middlewares globais (valem para toda a aplicação)
// Habilitar CORS (evitar bloqueios do navegador por Same-Origin Policy)
app.use(cors());
// Habilitar JSON no body (permitir ler req.body em requisições com JSON)
app.use(express.json());

// [F4] Definir configurações/ constantes do servidor
// BASE_URL = endereço da API externa que o servidor irá "proxiar"
const BASE_URL = 'https://jsonplaceholder.org';

// [F5] Rotas básicas (raíz e status)
// Rota de status (health check)
// Objetivo: teste rápido para saber se a instância do servidor está ok
//  HTTP GET /health -> retorna {ok: true}
app.get('/health', (req, res) => {
    res.json({ ok: true });
});
// Rota raíz (home)
//  Objetivo: mensagem amigável + lista de rotas disponíveis
app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Minha API está no ar \u2705</h1>
        <p>Rotas disponíveis:</p>
        <ul>
            <li> <a href="/health">/health</a></li>
            <li> <a href="/api/posts">/api/posts</a></li>
        </ul>
    `);
});

// [F7] Iniciar servidor (listen)
// SObre o servidor na porta 3000 e imprime uma mensagem no terminal
app.listen(3000, () => console.log('API proxy rodando em http://localhost:3000'));