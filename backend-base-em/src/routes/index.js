const { Router } = require('express');
const leituraRoutes = require('./leituraRoutes');

const router = Router();

/**
 * 1. Rota Raiz Principal (Informativa)
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: "online",
    projeto: "backend-base-em",
    descricao: "API RESTful profissional para monitoramento de leituras ambientais industriais em n-camadas.",
    banco_dados: process.env.DB_NAME || "db_em",
    rotas_principais: {
      raiz_informativa: "/",
      resumo_api: "/api",
      verificacao_saude: "/api/health",
      recurso_leituras: "/api/leituras"
    }
  });
});

/**
 * 2. Rota de Resumo da API
 */
router.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    documentacao_rotas: {
      "GET /api/health": "Retorna o status de saúde da aplicação.",
      "GET /api/leituras": "Lista todas as leituras com paginação (page, limit) e filtros opcionais por (station_id, data_inicio, data_fim).",
      "GET /api/leituras/:id": "Obtém uma leitura específica através de seu ID identificador numérico.",
      "POST /api/leituras": "Insere um novo registro de telemetria no banco de dados.",
      "PUT /api/leituras/:id": "Substitui os dados de uma leitura identificada.",
      "DELETE /api/leituras/:id": "Remove uma leitura do banco de dados.",
      "DELETE /api/leituras": "Remove massivamente todos os dados registrados (Uso exclusivo de laboratório)."
    }
  });
});

/**
 * 3. Rota de Health Check
 */
router.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * 4. Acoplamento de Módulos de Domínio
 */
router.use('/api/leituras', leituraRoutes);

module.exports = router;