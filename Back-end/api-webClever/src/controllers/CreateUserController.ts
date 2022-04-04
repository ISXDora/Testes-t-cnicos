import { Request, Response } from 'express';
import { Any } from 'typeorm';
import { Bpm } from '../entities/Bpm';
import { Systolic_Pressure } from '../entities/Systolic_pressure';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, birthDate, measurementDate, metricsMap} = request.body
      
       

        const service = new CreateUserService();

        const result = await service.execute({name, birthDate,measurementDate, metricsMap})


        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result)
    }
}