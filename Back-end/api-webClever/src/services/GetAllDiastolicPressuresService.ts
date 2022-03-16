import { getRepository } from "typeorm";
import { Diastolic_Pressure } from "../models/Diastolic_pressure";


export class GetAllDiastolicPressuresService {
    async execute() {
        const repo = getRepository(Diastolic_Pressure)

        const diastolicPressure = await repo.find({
            relations:['metric']
        });

        return diastolicPressure
    }
}