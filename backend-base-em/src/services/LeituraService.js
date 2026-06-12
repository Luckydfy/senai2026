const LeituraRepository = require('../repositories/LeituraRepository');
const ApiError = require('../utils/ApiError');
const LeituraResponseDTO = require('../dtos/LeituraResponseDTO');

/**
 * Camada Service: Contém todas as regras do domínio de negócio, 
 * fluxos lógicos de orquestração de dados e disparo centralizado de validações.
 */
class LeituraService {

  async criarLeitura(requestDto) {
    const validation = requestDto.validate();
    if (!validation.isValid) {
      throw ApiError.badRequest(validation.error);
    }

    const payload = {
      station_id: requestDto.station_id,
      timestamp: requestDto.timestamp,
      temperature_c: requestDto.temperature_c,
      humidity_pct: requestDto.humidity_pct,
    };

    const novaLeitura = await LeituraRepository.create(payload);
    return LeituraResponseDTO.build(novaLeitura);
  }

  async criarEmLote(dtosValidados) {
    if (!dtosValidados || dtosValidados.length === 0) return 0;
    
    const payloads = dtosValidados.map(dto => ({
      station_id: dto.station_id,
      timestamp: dto.timestamp,
      temperature_c: dto.temperature_c,
      humidity_pct: dto.humidity_pct,
    }));

    const result = await LeituraRepository.bulkCreate(payloads);
    return result.length;
  }

  async listarLeituras(queryParams) {
    const page = parseInt(queryParams.page || '1', 10);
    const limit = parseInt(queryParams.limit || '20', 10);
    const offset = (page - 1) * limit;

    const filters = {
      offset,
      limit,
      station_id: queryParams.station_id || null,
      data_inicio: queryParams.data_inicio || null,
      data_fim: queryParams.data_fim || null,
    };

    const result = await LeituraRepository.findAll(filters);
    const totalPages = Math.ceil(result.count / limit) || 1;

    return {
      data: LeituraResponseDTO.buildCollection(result.rows),
      meta: {
        total: result.count,
        page,
        limit,
        totalPages,
      },
    };
  }

  async obterLeituraPorId(id) {
    const leituraId = parseInt(id, 10);
    if (isNaN(leituraId)) {
      throw ApiError.badRequest('O ID fornecido na requisição é inválido.');
    }

    const leitura = await LeituraRepository.findById(leituraId);
    if (!leitura) {
      throw ApiError.notFound(`Leitura com ID ${leituraId} não foi localizada no sistema.`);
    }

    return LeituraResponseDTO.build(leitura);
  }

  async atualizarLeitura(id, requestDto) {
    const leituraId = parseInt(id, 10);
    if (isNaN(leituraId)) {
      throw ApiError.badRequest('O ID fornecido na requisição é inválido.');
    }

    const validation = requestDto.validate();
    if (!validation.isValid) {
      throw ApiError.badRequest(validation.error);
    }

    const payload = {
      station_id: requestDto.station_id,
      timestamp: requestDto.timestamp,
      temperature_c: requestDto.temperature_c,
      humidity_pct: requestDto.humidity_pct,
    };

    const leituraAtualizada = await LeituraRepository.update(leituraId, payload);
    if (!leituraAtualizada) {
      throw ApiError.notFound(`Impossível atualizar. Leitura com ID ${leituraId} não existe.`);
    }

    return LeituraResponseDTO.build(leituraAtualizada);
  }

  async excluirLeitura(id) {
    const leituraId = parseInt(id, 10);
    if (isNaN(leituraId)) {
      throw ApiError.badRequest('O ID fornecido na requisição é inválido.');
    }

    const excluido = await LeituraRepository.deleteById(leituraId);
    if (!excluido) {
      throw ApiError.notFound(`Impossível excluir. Leitura com ID ${leituraId} não existe.`);
    }

    return true;
  }

  async limparTodasLeituras() {
    await LeituraRepository.deleteAll();
    return true;
  }
}

module.exports = new LeituraService();