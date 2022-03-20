import { getRepository } from "typeorm";
import { User } from "../entities/User";


export class GetUserService {
    async execute(id: string) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        return user
    }
}