const ApiError = require('../utils/ApiError');

/**
 * Middleware Centralizado de Erros: Captura todas as falhas ocorridas em runtime
 * na aplicação e padroniza a payload de retorno para o cliente final.
 */
function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let message = 'Ocorreu um erro interno inesperado no servidor.';

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    statusCode = 400;
    message = err.errors.map(e => e.message).join(' | ');
  } else if (process.env.NODE_ENV === 'development') {
    // Detalhes extras expostos exclusivamente em ambiente de desenvolvimento
    message = err.message || message;
  }

  return res.status(statusCode).json({
    success: false,
    message: message
  });
}

module.exports = errorHandler;