const app = require('./app');
const ensureDatabaseExists = require('./config/ensureDatabase');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

/**
 * Bootstrap de inicialização assíncrona do servidor da aplicação
 */
async function bootstrap() {
  try {
    console.log('[Bootstrap] Iniciando ciclo de boot do ecossistema...');
    
    // 1. Executa a verificação e criação automatizada do banco de dados
    await ensureDatabaseExists();

    // 2. Conecta e sincroniza os modelos de dados ORM
    await sequelize.authenticate();
    console.log('[Bootstrap] Conexão com o PostgreSQL estabelecida com sucesso via Sequelize ORM.');
    
    // Realiza sincronização DDL básica recomendada para projetos iniciais/laboratórios
    await sequelize.sync();
    console.log('[Bootstrap] Modelos de dados sincronizados e tabelas prontas para operações.');

    // 3. Abre a escuta da porta de rede do servidor Express HTTP
    app.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(` Servidor Back-end Executando Ativamente na Porta: ${PORT}`);
      console.log(` Modo de Ambiente Atual: ${process.env.NODE_ENV || 'development'}`);
      console.log(`=======================================================`);
    });
    
  } catch (error) {
    console.error('[Bootstrap Critical] Falha catastrófica ao tentar subir a aplicação:', error);
    process.exit(1);
  }
}

bootstrap();