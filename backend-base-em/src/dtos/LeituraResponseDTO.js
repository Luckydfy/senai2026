/**
 * Camada DTO (Data Transfer Object): Protege a camada de apresentação externa,
 * garantindo que apenas dados mapeados sejam expostos estruturadamente para o cliente HTTP.
 */
class LeituraResponseDTO {
  constructor(model) {
    this.id = model.id;
    this.station_id = model.station_id;
    this.timestamp = model.timestamp;
    this.temperature_c = model.temperature_c;
    this.humidity_pct = model.humidity_pct;
  }

  /**
   * Mapeia um único modelo de dados Sequelize para o DTO de saída.
   */
  static build(model) {
    if (!model) return null;
    return new LeituraResponseDTO(model);
  }

  /**
   * Mapeia uma coleção de modelos brutos para um array ordenado de DTOs de saída.
   */
  static buildCollection(models) {
    if (!Array.isArray(models)) return [];
    return models.map(model => LeituraResponseDTO.build(model));
  }
}

module.exports = LeituraResponseDTO;