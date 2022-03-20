import { getRepository } from "typeorm";
import { Health_Metric } from "../entities/Health_metrics";


export class GetHealthMetricsService {
    async execute(id: string) {
        const repo = getRepository(Health_Metric)

        const health_metrics = await repo.findOne(id,{
            relations:['user']
        });

        return health_metrics
    }
}