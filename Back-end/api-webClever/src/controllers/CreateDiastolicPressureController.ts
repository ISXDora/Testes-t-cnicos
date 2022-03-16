import { Request, Response } from 'express';
import { CreateDiastolicPressureService } from '../services/CreateDiastolicPressureService';

export class CreateDiastolicPressureController {
    async handle(request: Request, response: Response){
        const {value, health_metrics_id} = request.body

        const service = new CreateDiastolicPressureService();

        const result = await service.execute({value, health_metrics_id})

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}