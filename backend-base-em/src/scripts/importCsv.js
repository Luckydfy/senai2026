const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const ensureDatabaseExists = require('../config/ensureDatabase');
const sequelize = require('../config/database');
const LeituraService = require('../services/LeituraService');
const LeituraRequestDTO = require('../dtos/LeituraRequestDTO');

async function run() {
  const clearFlag = process.argv.includes('--clear');
  const csvPath = path.resolve(__dirname, '../../data/em.csv');

  console.log('[Script Import] Iniciando rotina de leitura e ingestão de CSV...');

  try {
    // 1. Assegura infraestrutura antes do processamento
    await ensureDatabaseExists();
    await sequelize.authenticate();
    await sequelize.sync();

    // 2. Limpeza opcional condicional solicitada por flag
    if (clearFlag) {
      console.log('[Script Import] Flag --clear detectada. Limpando dados históricos de leituras...');
      await LeituraService.limparTodasLeituras();
    }

    const dtosValidados = [];
    let totalLinhasLidas = 0;
    let totalLinhasInvalidas = 0;

    // 3. Fluxo de leitura por stream assíncrona usando csv-parser conforme especificação
    const parseStream = new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .on('error', (err) => reject(new Error(`Falha física na leitura do arquivo CSV: ${err.message}`)))
        .pipe(csv())
        .on('data', (row) => {
          totalLinhasLidas++;
          const requestDto = new LeituraRequestDTO(row);
          const validation = requestDto.validate();

          if (validation.isValid) {
            dtosValidados.push(requestDto);
          } else {
            totalLinhasInvalidas++;
            if (process.env.NODE_ENV === 'development') {
              console.warn(`[Linha CSV inválida desconsiderada -> Registro #${totalLinhasLidas}]: ${validation.error}`);
            }
          }
        })
        .on('end', () => resolve())
        .on('error', (err) => reject(err));
    });

    await parseStream;

    // 4. Ingestão em bloco (Bulk Create) acionando camada de negócio
    console.log(`[Script Import] Processamento concluído. Linhas processadas: ${totalLinhasLidas}. Registros válidos identificados: ${dtosValidados.length}.`);
    
    let totalImportado = 0;
    if (dtosValidados.length > 0) {
      totalImportado = await LeituraService.criarEmLote(dtosValidados);
    }

    console.log(`\n>>> SUCESSO: Total de registros efetivamente importados para a tabela leituras: ${totalImportado} <<<`);
    if (totalLinhasInvalidas > 0) {
      console.log(`>>> AVISO: ${totalLinhasInvalidas} linhas falharam nas validações de negócio e foram descartadas.`);
    }

  } catch (error) {
    console.error('[Script Import Erro] Falha no processamento do lote do CSV:', error.message);
  } finally {
    await sequelize.close();
    console.log('[Script Import] Conexão com banco fechada. Encerrando execução do script.');
    process.exit(0);
  }
}

run();