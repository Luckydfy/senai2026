const { Op } = require('sequelize');
const Leitura = require('../models/Leitura');

/**
 * Camada Repository: Responsável estrita pelas operações de infraestrutura
 * I/O de dados através do driver do framework ORM (Sequelize).
 */
class LeituraRepository {
  
  async create(data) {
    return await Leitura.create(data);
  }

  async bulkCreate(dataArray) {
    return await Leitura.bulkCreate(dataArray);
  }

  async findById(id) {
    return await Leitura.findByPk(id);
  }

  async findAll(filters = {}) {
    const { offset, limit, station_id, data_inicio, data_fim } = filters;
    const whereClause = {};

    if (station_id) {
      whereClause.station_id = station_id;
    }

    if (data_inicio && data_fim) {
      whereClause.timestamp = {
        [Op.between]: [new Date(data_inicio), new Date(data_fim)],
      };
    } else if (data_inicio) {
      whereClause.timestamp = {
        [Op.gte]: new Date(data_inicio),
      };
    } else if (data_fim) {
      whereClause.timestamp = {
        [Op.lte]: new Date(data_fim),
      };
    }

    return await Leitura.findAndCountAll({
      where: whereClause,
      limit: limit,
      offset: offset,
      order: [['id', 'ASC']],
    });
  }

  async update(id, data) {
    const leitura = await Leitura.findByPk(id);
    if (!leitura) return null;
    return await leitura.update(data);
  }

  async deleteById(id) {
    const leitura = await Leitura.findByPk(id);
    if (!leitura) return false;
    await leitura.destroy();
    return true;
  }

  async deleteAll() {
    // Truncate limpa a tabela reiniciando as chaves primárias sequenciais de forma atômica
    await Leitura.destroy({
      truncate: true,
      restartIdentity: true,
    });
    return true;
  }
}

module.exports = new LeituraRepository();