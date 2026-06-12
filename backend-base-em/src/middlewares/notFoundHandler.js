const ApiError = require('../utils/ApiError');

/**
 * Middleware interceptador para rotas inexistentes. Captura qualquer
 * chamada HTTP órfã e a direciona para a pipeline central de erros da API.
 */
function notFoundHandler(req, res, next) {
  const error = ApiError.notFound(`A rota solicitada [${req.method}] ${req.originalUrl} não existe.`);
  next(error);
}

module.exports = notFoundHandler;