import { Request, Response } from 'express';
import { GetAllUsersService } from '../services/GetAllUsersService';

export class GetAllUsersController {
    async handle(request: Request, response: Response){
        const {name, birth_date } = request.params

        const service = new GetAllUsersService();

        const users = await service.execute()

        if(users instanceof Error) {
            return response.status(400).json(users.message);
        }

        return response.status(200).json(users)
    }
}