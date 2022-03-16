import { getRepository } from "typeorm";
import { Systolic_Pressure } from "../models/Systolic_pressure";


export class GetAllSystolicPressuresService {
    async execute() {
        const repo = getRepository(Systolic_Pressure)

        const systolicPressure = await repo.find({
            relations:['metric']
        });

        return systolicPressure
    }
}