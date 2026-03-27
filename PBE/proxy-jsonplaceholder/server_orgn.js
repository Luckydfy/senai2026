// // Importa o Express (Framework para criar servidor HTTP e rotas)
// const express = require('express');

// // Importa Axios (cliente HTTP para consumir requisições a APIs externas)
// const axios = require('axios');

// // Importa o CORS (permite que fronts-ends de outras origens acessem seu backend)
// const cors = require('cors');

// // Cria a aplicação Express (o "servidor" em si)
// const app = express();

// // Middleware global: libera CORS para todas as rotas
// // Sem isso, o navegador pode bloquear chamadas do front-end
// app.use(cors());

// // Middleware global: habilita leitura de JSON no corpo das requisições
// // Sem isso, em um POST com JSON, req.body pode vir indefinido
// app.use(express.json());

// // URL base da API externa
// const BASE_URL = 'https://jsonplaceholder.org/';

// // Rota simples para configurar que o servidor está rodando
// // GET /health -> retorna {ok: true}
// app.get("/health", (req, res) => {
//     res.json({ ok: true });
// });

// // Rota que lista os posts
// // GET /api/posts
// // Get /api/posts?userId=1 (Filtra posts de um usuário)
// app.get('/api/posts', async (req, res) => {
//     try {
//         // Lê o parâmetro da query string (vem como string)
//         // Se o usuário chamar /api/posts?userId=1, userId será '1' (string)
//         const { userId } = req.query;

//         // Faz a requisição para a API (BASE_URL/posts)
//         // params adiciona query string automaticamente
//         // Se userId existir -> params {userID}
//         // Se userId não existir -> params {}
//         const response = await axios.get(`${BASE_URL}posts`, {
//             params: userId ? { userId } : {} 
//         });

//         // Retorna 200 OK com um envelope padronizado
//         // source: indice de onde veio
//         // count: quantidade de itens
//         // data: os posts
//         res.status(200).json({
//             source: "jsonplaceholder",
//             count: response.data.length,
//             data: response.data
//         })
//     }
//         catch (err) {
//             res.status(502).json({
//                 message: "Falha ao consumir API externa",
//                 details: err.message
//             });
//         }
// });

// /*
// http://localhost:3000/health
// http://localhost:3000/api/posts
// */

// app.listen(3000, () => console.log("API proxy rodando em http://localhost:3000"));