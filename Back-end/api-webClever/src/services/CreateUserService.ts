import { json } from "express";
import { getRepository, InsertValuesMissingError } from "typeorm";
import { Bpm } from "../entities/Bpm";
import { Health_Metric } from "../entities/Health_metrics";
import { User } from "../entities/User"
type MetricRequest ={
    bpm: string;
    pressureDiastolic: string;
    pressureSystolic: string;
}
type UserRequest = {
    name: string;
    birthDate: Date;
    measurementDate: Date;
    metricsMap: Map<string, MetricRequest>
}

export class CreateUserService {
    async execute({name, birthDate,measurementDate, metricsMap}:UserRequest ): Promise< Error | User > {
        
       
       

       const resultMetricsMap = Object.entries({metricsMap})
        const valueBpm = []
        for (let metric of resultMetricsMap){
            valueBpm.push(metric[1]['02:00'].bpm)
            valueBpm.push(metric[1]['06:00'].bpm)
            valueBpm.push(metric[1]['10:00'].bpm)
            valueBpm.push(metric[1]['14:00'].bpm)
            valueBpm.push(metric[1]['18:00'].bpm)
            valueBpm.push(metric[1]['22:00'].bpm)


        }
        Object.keys(metricsMap).map((item, index)=>console.log(item))
       //console.log(resultMetricsMap[0][1]['02:00'].bpm)
    
            
       
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'02:00').value.bpm)
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'06:00').value)
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'10:00').value)
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'14:00').value)
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'18:00').value)
        //console.log(Object.getOwnPropertyDescriptor(metricsMap,'22:00').value)        

        // resultMetricsMap.forEach((metric, hour)=> {console.log(metric)
        // console.log(hour)})
         const repo = getRepository(User);

         const user = repo.create({
             name,
             birthDate,

         })
         const userReturn = await repo.save(user)


         const repoHealth = getRepository(Health_Metric);
         if (!await repo.findOne(userReturn.id)){
             return new Error("User does not exist")
         }
         const health_metrics = await repoHealth.create({
             user_id: userReturn.id,
             measurementDate
         })
         const healthReturn = await repoHealth.save(health_metrics)


         const repoBpm = getRepository(Bpm);
         if (!await repoHealth.findOne(healthReturn.id)){
             return new Error("Health metrics not found!")
         }

        for (let item of valueBpm){
            
            const bpm = repoBpm.create({
                value : item,
                health_metrics_id: healthReturn.id
            })
            const bpmReturn =  await repoBpm.save(bpm)
        }


        

        return user;
    
    }
}