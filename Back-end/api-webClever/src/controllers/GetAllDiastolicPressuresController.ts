import { Request, Response } from 'express';
import { GetAllDiastolicPressuresService } from '../services/GetAllDiastolicPressuresService';

export class GetAllDiastolicPressuresController {
    async handle(request: Request, response: Response){
        const { id, value } = request.params

        const service = new GetAllDiastolicPressuresService()

        const result = await service.execute()

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        console.log(result)
        return response.status(200).json(result)
    }
}