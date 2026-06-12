const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const client = axios.create({
  baseURL: `http://localhost:${PORT}`,
  timeout: 5000,
  validateStatus: () => true // Permite capturar respostas de erro programadas na validação
});

async function run() {
  console.log('========================================================');
  console.log(' INICIANDO SUITE DE TESTE DE INTEGRAÇÃO COM AXIOS CLOUD ');
  console.log('========================================================\n');

  try {
    // 1. Testando GET /api/health
    console.log('-> Executando Etapa 1: GET /api/health...');
    const healthRes = await client.get('/api/health');
    console.log(`[Status HTTP]: ${healthRes.status}`);
    console.log('[Resposta]:', JSON.stringify(healthRes.data), '\n');

    // 2. Testando GET /api/leituras?page=1&limit=5
    console.log('-> Executando Etapa 2: GET /api/leituras?page=1&limit=5...');
    const listRes = await client.get('/api/leituras', { params: { page: 1, limit: 5 } });
    console.log(`[Status HTTP]: ${listRes.status}`);
    console.log('[Meta Total]:', listRes.data.meta ? listRes.data.meta.total : 'N/A');
    console.log('[Amostra de dados (Top 1)]:', listRes.data.data && listRes.data.data.length > 0 ? JSON.stringify(listRes.data.data[0]) : 'Sem registros na base.', '\n');

    // 3. Testando POST /api/leituras
    console.log('-> Executando Etapa 3: POST /api/leituras criando registro de teste...');
    const payloadTeste = {
      station_id: "EM-AXIOS-TEST-99",
      timestamp: new Date().toISOString(),
      temperature_c: 24.8,
      humidity_pct: 55.4
    };
    const postRes = await client.post('/api/leituras', payloadTeste);
    console.log(`[Status HTTP]: ${postRes.status}`);
    console.log('[Resposta]:', JSON.stringify(postRes.data), '\n');

    // 4. Testando GET /api/leituras/:id com base no registro recém inserido
    if (postRes.data && postRes.data.success && postRes.data.data.id) {
      const novoId = postRes.data.data.id;
      console.log(`-> Executando Etapa 4: GET /api/leituras/${novoId} buscando registro gerado...`);
      const getByIdRes = await client.get(`/api/leituras/${novoId}`);
      console.log(`[Status HTTP]: ${getByIdRes.status}`);
      console.log('[Resposta]:', JSON.stringify(getByIdRes.data), '\n');
    } else {
      console.log('-> Etapa 4 Abortada: Falha na criação do ID de testes no passo anterior.\n');
    }

    console.log('========================================================');
    console.log('   BATERIA DE TESTES AUTOMATIZADOS AXIOS FINALIZADA     ');
    console.log('========================================================');

  } catch (error) {
    console.error('[Erro Crítico de Rede / Conexão]: A API precisa estar de pé rodando em background para que o script execute.');
    console.error('Detalhe:', error.message);
  }
}

run();