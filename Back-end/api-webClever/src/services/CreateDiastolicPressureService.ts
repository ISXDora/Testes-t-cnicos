import { getRepository } from "typeorm";
import { Diastolic_Pressure } from "../entities/Diastolic_pressure";
import { Health_Metric } from "../entities/Health_metrics";

type DiastolicPressureRequest = {
    value: number;
    health_metrics_id: string;
}

export class CreateDiastolicPressureService {
    async execute({
        value, 
        health_metrics_id}:DiastolicPressureRequest ): Promise<Error | DiastolicPressureRequest> {
        
        const repo = getRepository(Diastolic_Pressure);
        const repoHealthMetric = getRepository(Health_Metric)

        if (!await repoHealthMetric.findOne(health_metrics_id)){
            return new Error("Health metrics not found!")
        }

        const diastolicPressure = repo.create({
            value, 
            health_metrics_id
        })

        await repo.save(diastolicPressure)

        return diastolicPressure;
    }
}