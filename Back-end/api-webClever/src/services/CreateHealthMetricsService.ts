import { getRepository } from "typeorm";
import { Health_Metric } from "../entities/Health_metrics";
import { User } from "../entities/User"

type HealthMetricsRequest = {
    user_id: string;
    measurementDate: Date;
}

export class CreateHealthMetricsService {
    async execute({
        user_id, 
        measurementDate}:HealthMetricsRequest ): Promise<Error | HealthMetricsRequest> {
        
        const repo = getRepository(Health_Metric);
        const repoUser = getRepository(User)

        if (!await repoUser.findOne(user_id)){
            return new Error("User does not exist")
        }

        const health_metrics = repo.create({
            user_id,
            measurementDate
        })

        await repo.save(health_metrics)

        return health_metrics;
    }
}