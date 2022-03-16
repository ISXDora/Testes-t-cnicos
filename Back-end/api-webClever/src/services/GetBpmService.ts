import { getRepository } from "typeorm";
import { Bpm } from "../models/Bpm";


export class GetBpmService {
    async execute(id: string) {
        const repo = getRepository(Bpm)

        const bpm = await repo.findOne(id,{
            relations:['metric']
        });

        return bpm
    }
}