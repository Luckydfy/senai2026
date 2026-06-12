const parseNumber = require('../utils/parseNumber');

/**
 * Camada DTO (Data Transfer Object): Trata a normalização sanitária,
 * coerção e estruturação segura dos dados de entrada HTTP ou arquivos externos.
 */
class LeituraRequestDTO {
  constructor(rawData) {
    this.station_id = rawData.station_id !== undefined && rawData.station_id !== null 
      ? String(rawData.station_id).trim() 
      : null;
      
    this.timestamp = rawData.timestamp ? new Date(rawData.timestamp) : null;
    this.temperature_c = parseNumber(rawData.temperature_c);
    this.humidity_pct = parseNumber(rawData.humidity_pct);
  }

  /**
   * Executa validações estritas de contratos de payload exigidas pelos requisitos.
   * Retorna um objeto contendo { isValid: boolean, error: string|null }
   */
  validate() {
    if (!this.station_id || this.station_id === '') {
      return { isValid: false, error: 'station_id é obrigatório.' };
    }
    
    if (!this.timestamp || isNaN(this.timestamp.getTime())) {
      return { isValid: false, error: 'timestamp é obrigatório e deve ser uma data válida.' };
    }
    
    if (isNaN(this.temperature_c)) {
      return { isValid: false, error: 'temperature_c é obrigatório e deve ser numérico.' };
    }
    
    if (isNaN(this.humidity_pct)) {
      return { isValid: false, error: 'humidity_pct é obrigatório e deve ser numérico.' };
    }
    
    if (this.humidity_pct < 0 || this.humidity_pct > 100) {
      return { isValid: false, error: 'humidity_pct é obrigatório, deve ser numérico e deve estar entre 0 e 100.' };
    }

    return { isValid: true, error: null };
  }
}

module.exports = LeituraRequestDTO;