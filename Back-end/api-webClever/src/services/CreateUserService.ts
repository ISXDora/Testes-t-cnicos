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
        
        let newArrayMetrics = Object.entries(metricsMap)

        let metricMapResult = new Map(newArrayMetrics);
              
         const repo = getRepository(User);

         const user = repo.create({
            name,
            birthDate,

         })
         const userReturn = await repo.save(user)

         /*------------------------MeasurementDate-HealthMetric-----------------------------*/

         const repoHealth = getRepository(Health_Metric);
         if (!await repo.findOne(userReturn.id)){
            return new Error("User does not exist")
         }
         const health_metrics = await repoHealth.create({
            user_id: userReturn.id,
            measurementDate
         })
         const healthReturn = await repoHealth.save(health_metrics)

         /*------------------------Bpm----------------------------*/

        const repoBpm = getRepository(Bpm);
         if (!await repoHealth.findOne(healthReturn.id)){
            return new Error("Health metrics not found!")
         }

        const bpms: Array<any> = new Array();
        metricMapResult.forEach((metric, hourKey)=> {

            console.log(metric)
            console.log('hour', hourKey)

            
            if(metric.bpm){
                
                const splitedHour = hourKey.split(':')
                const bpm = repoBpm.create({
                    health_metrics_id: healthReturn.id,
                    value: metric.bpm,
                    hour: new Date(0, 0, 0, Number(splitedHour[0]), Number(splitedHour[1]), 0)
                      })
                bpms.push(bpm)
                    
            }
        })
             
          const bpmReturn =  await repoBpm.save(bpms)

        // for (let item of valueBpm){
            
        //    const bpm = repoBpm.create({
        //        value : item,
        //        health_metrics_id: healthReturn.id
        //    })
        // }


        

        return //user;
    
    }
}