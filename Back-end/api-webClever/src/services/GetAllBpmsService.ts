import { getRepository } from "typeorm";
import { Bpm } from "../models/Bpm";


export class GetAllBpmsService {
    async execute() {
        const repo = getRepository(Bpm)

        const bpm = await repo.find({
            relations:['metric']
        });

        return bpm
    }
}