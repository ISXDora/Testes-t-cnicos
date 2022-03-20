import { getRepository } from "typeorm";
import { Bpm } from "../entities/Bpm";
import { Health_Metric } from "../entities/Health_metrics";

type BpmRequest = {
    value: number;
    health_metrics_id: string;
}

export class CreateBpmService {
    async execute({
        value, 
        health_metrics_id}:BpmRequest ): Promise<Error | BpmRequest> {
        
        const repo = getRepository(Bpm);
        const repoHealthMetric = getRepository(Health_Metric)

        if (!await repoHealthMetric.findOne(health_metrics_id)){
            return new Error("Health metrics not found!")
        }

        const bpm = repo.create({
            value, 
            health_metrics_id
        })

        await repo.save(bpm)

        return bpm;
    }
}