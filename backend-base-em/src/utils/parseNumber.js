/**
 * Utilitário de formatação numérica flexível. Aceita entradas numéricas
 * nativas, strings com ponto ou strings utilizando a notação de vírgula regional.
 */
function parseNumber(value) {
  if (value === undefined || value === null || value === '') {
    return NaN;
  }
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const cleaned = value.replace(',', '.').trim();
    return parseFloat(cleaned);
  }
  return NaN;
}

module.exports = parseNumber;