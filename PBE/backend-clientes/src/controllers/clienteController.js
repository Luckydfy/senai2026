import {createClienteDTO} from "../dtos/createClienteDTO.js";

export class CLienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }

    listar = (req, res) => {
        //Corpo do Método
        try {
            // Pede para camada Aplicação/Service listar os clientes
            const clientes = this.clienteService.listarCliente();

            //Retorna os clientes para o front-edn
            return res.status(200).json(clientes);
        }
        catch (err) {
            return res.status(500).json({error:err.message});
        }
    }

    criar = (req, res)  => {
        //Corpo do método
        try {
            // Recebendo body e transformando em um objeto VTO
            const dto = createClienteDTO(req.body);
            // Solicitando a camada DTO 
            const clienteCriado = this.clienteService.cadastrarCliente(dto);
    
            return res.status(201).json(clienteCriado);
        }
        catch(err) {
            return res.status(400).json({error:err.message});
        }
    }
}