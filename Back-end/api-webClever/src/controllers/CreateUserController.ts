import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, birthDate } = request.body

        const service = new CreateUserService();

        const result = await service.execute({name, birthDate})

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}