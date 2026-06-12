const { Sequelize } = require('sequelize');
require('dotenv').config();

/**
 * Camada de Configuração: Instancia e centraliza o cliente de conexão
 * do Sequelize ORM configurado com pools de conexão adequados.
 */
const sequelize = new Sequelize(
  process.env.DB_NAME || 'db_em',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: false, // Desativa createdAt e updatedAt nativos para bater com o esquema legado solicitado
      freezeTableName: true, // Impede pluralização automática da tabela
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;