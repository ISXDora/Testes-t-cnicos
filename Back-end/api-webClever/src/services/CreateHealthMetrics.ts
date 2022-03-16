import { getRepository } from "typeorm";
import { Health_Metric } from "../models/Health_metrics";
import { User } from "../models/User"

type HealthMetricsRequest = {
    user_id: string;
    measurement_date: Date;
    created_at: Date;
    updated_at: Date;
}

export class CreateUserService {
    async execute({
        user_id, 
        measurement_date, 
        created_at, 
        updated_at}:HealthMetricsRequest ): Promise<HealthMetricsRequest | Error> {
        
        const repo = getRepository(Health_Metric);
        const repoUser = getRepository(User)

        if (!await repoUser.findOne(user_id)){
            return new Error("User does not exist")
        }

        const health_metrics = repo.create({
            user_id,
            measurement_date,
            created_at,
            updated_at
        })

        await repo.save(health_metrics)

        return health_metrics;
    }
}