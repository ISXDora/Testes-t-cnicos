import { getRepository } from "typeorm";
import { Health_Metric } from "../models/Health_metrics";
import { Systolic_Pressure } from "../models/Systolic_pressure";

type SystolicPressureRequest = {
    value: number;
    health_metrics_id: string;
}

export class CreateSystolicPressureService {
    async execute({
        value, 
        health_metrics_id}:SystolicPressureRequest ): Promise<Error | SystolicPressureRequest> {
        
        const repo = getRepository(Systolic_Pressure);
        const repoHealthMetric = getRepository(Health_Metric)

        if (!await repoHealthMetric.findOne(health_metrics_id)){
            return new Error("Health metrics not found!")
        }

        const systolicPressure = repo.create({
            value, 
            health_metrics_id
        })

        await repo.save(systolicPressure)

        return systolicPressure;
    }
}