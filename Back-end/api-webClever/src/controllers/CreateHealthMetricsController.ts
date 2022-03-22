import { Request, Response } from 'express';
import { CreateHealthMetricsService } from '../services/CreateHealthMetricsService';

export class CreateHealthMetricsController {
    async handle(request: Request, response: Response){
        const {user_id, measurementDate} = request.body

        const service = new CreateHealthMetricsService();

        const result = await service.execute({user_id, measurementDate})

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}