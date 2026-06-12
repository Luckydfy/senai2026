const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Camada Model: Representação pura do mapeamento objeto-relacional (ORM)
 * que espelha os tipos de metadados da tabela pública "public.leituras".
 */
const Leitura = sequelize.define('Leitura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  station_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  temperature_c: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  humidity_pct: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  schema: 'public',
  tableName: 'leituras',
});

module.exports = Leitura;