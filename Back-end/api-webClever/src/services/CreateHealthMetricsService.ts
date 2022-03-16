import { getRepository } from "typeorm";
import { Health_Metric } from "../models/Health_metrics";
import { User } from "../models/User"

type HealthMetricsRequest = {
    user_id: string;
    measurement_date: Date;
}

export class CreateHealthMetricsService {
    async execute({
        user_id, 
        measurement_date}:HealthMetricsRequest ): Promise<Error | HealthMetricsRequest> {
        
        const repo = getRepository(Health_Metric);
        const repoUser = getRepository(User)

        if (!await repoUser.findOne(user_id)){
            return new Error("User does not exist")
        }

        const health_metrics = repo.create({
            user_id,
            measurement_date
        })

        await repo.save(health_metrics)

        return health_metrics;
    }
}