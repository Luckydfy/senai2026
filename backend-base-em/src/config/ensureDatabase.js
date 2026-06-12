const { Client } = require('pg');
require('dotenv').config();

/**
 * Camada de Configuração: Garante de maneira idempotente que o banco de dados
 * alvo exista no cluster PostgreSQL antes de qualquer operação do Sequelize.
 */
async function ensureDatabaseExists() {
  const connectionConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_MAINTENANCE_NAME || 'postgres',
  };

  const targetDatabase = process.env.DB_NAME || 'db_em';
  const client = new Client(connectionConfig);

  try {
    await client.connect();
    
    // Verifica se o banco de dados especificado no arquivo .env já existe
    const res = await client.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [targetDatabase]
    );

    if (res.rowCount === 0) {
      console.log(`[Database Setup] Banco de dados "${targetDatabase}" não encontrado. Criando...`);
      // No PostgreSQL, CREATE DATABASE não aceita parâmetros parametrizados por padrão, inserção limpa controlada internamente
      await client.query(`CREATE DATABASE "${targetDatabase}"`);
      console.log(`[Database Setup] Banco de dados "${targetDatabase}" criado com sucesso.`);
    } else {
      console.log(`[Database Setup] Banco de dados "${targetDatabase}" já existe.`);
    }
  } catch (error) {
    console.error('[Database Setup] Erro crítico ao verificar/criar banco de dados:', error.message);
    throw error;
  } finally {
    await client.end();
  }
}

module.exports = ensureDatabaseExists;