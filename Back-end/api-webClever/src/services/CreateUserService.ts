import { getRepository } from "typeorm";
import { User } from "../entities/User"

type UserRequest = {
    name: string;
    birthDate: Date;
}

export class CreateUserService {
    async execute({name, birthDate}:UserRequest ): Promise<User> {
        
        const repo = getRepository(User);

        const user = repo.create({
            name,
            birthDate
        })

        await repo.save(user)

        return user;
    }
}