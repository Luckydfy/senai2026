const LeituraService = require('../services/LeituraService');
const LeituraRequestDTO = require('../dtos/LeituraRequestDTO');

/**
 * Camada Controller: Ponto de entrada das requisições HTTP. Mapeia exclusivamente
 * os parâmetros de protocolo (req, res, next) delegando fluxos para os Serviços.
 */
class LeituraController {
  
  async listar(req, res, next) {
    try {
      const responseBody = await LeituraService.listarLeituras(req.query);
      return res.status(200).json(responseBody);
    } catch (error) {
      next(error);
    }
  }

  async buscarPorId(req, res, next) {
    try {
      const { id } = req.params;
      const data = await LeituraService.obterLeituraPorId(id);
      return res.status(200).json({
        success: true,
        data: data
      });
    } catch (error) {
      next(error);
    }
  }

  async criar(req, res, next) {
    try {
      const requestDto = new LeituraRequestDTO(req.body);
      const data = await LeituraService.criarLeitura(requestDto);
      return res.status(201).json({
        success: true,
        message: 'Leitura criada com sucesso.',
        data: data
      });
    } catch (error) {
      next(error);
    }
  }

  async atualizar(req, res, next) {
    try {
      const { id } = req.params;
      const requestDto = new LeituraRequestDTO(req.body);
      const data = await LeituraService.atualizarLeitura(id, requestDto);
      return res.status(200).json({
        success: true,
        message: 'Leitura atualizada com sucesso.',
        data: data
      });
    } catch (error) {
      next(error);
    }
  }

  async excluir(req, res, next) {
    try {
      const { id } = req.params;
      await LeituraService.excluirLeitura(id);
      return res.status(200).json({
        success: true,
        message: `Leitura com ID ${id} excluída com sucesso.`
      });
    } catch (error) {
      next(error);
    }
  }

  async excluirTodos(req, res, next) {
    try {
      await LeituraService.limparTodasLeituras();
      return res.status(200).json({
        success: true,
        message: 'Todos os registros de leituras foram removidos com sucesso da base de laboratório.'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LeituraController();