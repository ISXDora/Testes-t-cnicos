import { Request, Response } from 'express';
import { GetUserService } from '../services/GetUserService';

export class GetUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params

        const service = new GetUserService;

        const result = await service.execute(id)

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}

/* Chamar GetHealthMetrics como service e pegar o resultado, mas qual parametro usar
para capturar a data de verificação do usuário em questão? user_id ? 

Ver documentação algo sobre o  controller desse service.
ou fazer outro 
controller para um service com query personalizada. Querybuilder.

chamar o service aqui e colocar um console.log(capturar o result de ServiceHealthMetric).
*/ 