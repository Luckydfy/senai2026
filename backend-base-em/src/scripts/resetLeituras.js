const ensureDatabaseExists = require('../config/ensureDatabase');
const sequelize = require('../config/database');
const LeituraService = require('../services/LeituraService');

async function run() {
  console.log('[Script Reset] Iniciando operação de limpeza total do laboratório...');
  try {
    await ensureDatabaseExists();
    await sequelize.authenticate();
    await sequelize.sync();

    // Executa a limpeza utilizando a camada de serviço de domínio
    await LeituraService.limparTodasLeituras();

    console.log('\n================================================================');
    console.log(' SUCESSO: Tabela [public.leituras] limpa e zerada com sucesso! ');
    console.log(' Contador Sequencial de Autoincremento (ID) Resetado para 1. ');
    console.log('================================================================');

  } catch (error) {
    console.error('[Script Reset Erro] Falha crítica ao resetar banco:', error.message);
  } finally {
    await sequelize.close();
    console.log('[Script Reset] Conexão encerrada.');
    process.exit(0);
  }
}

run();