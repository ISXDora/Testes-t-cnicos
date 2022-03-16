import { Request, Response } from 'express';
import { CreateSystolicPressureService } from '../services/CreateSystolicPressureService';

export class CreateSystolicPressureController {
    async handle(request: Request, response: Response){
        const {value, health_metrics_id} = request.body

        const service = new CreateSystolicPressureService();

        const result = await service.execute({value, health_metrics_id})

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}