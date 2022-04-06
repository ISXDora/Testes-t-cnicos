import {createQueryBuilder, getRepository } from "typeorm";
import { User } from "../entities/User";


export class GetUserService {
    async execute(id: string) {
        const repo = getRepository(User);

        const user = await repo.find({
           // relations: ['health_Metrics'],
           relations:['health_Metrics', 'health_Metrics.bpms', 'health_Metrics.diastolics_pressure', 'health_Metrics.systolics_pressure'],
           where: [
               { id},
           ],
        },
        )

        


       
        return user
    }
}

// find(id, callback){
//     db.query(`
//     SELECT students.*, teachers.name AS teacher_name
//     FROM students 
//     LEFT JOIN teachers ON (students.teacher_id = teachers.id)
//     WHERE students.id=$1`, [id], function(err, results){
//         if (err) throw `Database Error! ${err}`
        
//         callback(results.rows[0])
//     })
// },