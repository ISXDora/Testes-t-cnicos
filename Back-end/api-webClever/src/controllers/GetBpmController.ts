import { Request, Response } from 'express';
import { GetBpmService } from '../services/GetBpmService';

export class GetBpmController {
    async handle(request: Request, response: Response){
        const { id } = request.params

        const service = new GetBpmService;

        const result = await service.execute(id)

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        console.log(result)
        return response.status(200).json(result)
    }
}