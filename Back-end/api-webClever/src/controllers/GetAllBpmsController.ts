import { Request, Response } from 'express';
import { GetAllBpmsService } from '../services/GetAllBpmsService';

export class GetAllBpmsController {
    async handle(request: Request, response: Response){
        const { id, value } = request.params

        const service = new GetAllBpmsService

        const result = await service.execute()

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        
        return response.status(200).json(result)
    }
}