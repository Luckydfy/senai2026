const { Router } = require('express');
const LeituraController = require('../controllers/LeituraController');

const router = Router();

/**
 * Camada de Rotas: Mapeamento de endpoints específicos do subdomínio de leituras ambientais.
 */
router.get('/', LeituraController.listar);
router.get('/:id', LeituraController.buscarPorId);
router.post('/', LeituraController.criar);
router.put('/:id', LeituraController.atualizar);
router.delete('/:id', LeituraController.excluir);
router.delete('/', LeituraController.excluirTodos);

module.exports = router;