import { getRepository } from "typeorm";
import { User } from "../models/User"

type UserRequest = {
    name: string;
    birth_date: Date;
}

export class CreateUserService {
    async execute({name, birth_date}:UserRequest ): Promise<User> {
        
        const repo = getRepository(User);

        const user = repo.create({
            name,
            birth_date
        })

        await repo.save(user)

        return user;
    }
}