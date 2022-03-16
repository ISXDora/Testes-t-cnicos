import { Request, Response } from 'express';
import { CreateBpmService } from '../services/CreateBpmService';

export class CreateBpmController {
    async handle(request: Request, response: Response){
        const {value, health_metrics_id} = request.body

        const service = new CreateBpmService();

        const result = await service.execute({value, health_metrics_id})

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}