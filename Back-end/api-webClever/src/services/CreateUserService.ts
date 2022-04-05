import { json } from "express";
import { getRepository, InsertValuesMissingError } from "typeorm";
import { Bpm } from "../entities/Bpm";
import { Diastolic_Pressure } from "../entities/Diastolic_pressure";
import { Health_Metric } from "../entities/Health_metrics";
import { Systolic_Pressure } from "../entities/Systolic_pressure";
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

         /*------------------------User----------------------------*/
              
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

         if (!await repoHealth.findOne(healthReturn.id)){
            return new Error("Health metrics not found!")
         }
        const repoBpm = getRepository(Bpm);

        const repoPressureDiastolic = getRepository(Diastolic_Pressure);

        const repoPressureSystolic = getRepository(Systolic_Pressure);
        

        const bpms: Array<Bpm> = new Array();
        const pressureDiastolics: Array<Diastolic_Pressure> = new Array();
        const pressureSystolics: Array<Systolic_Pressure> = new Array();
        metricMapResult.forEach((metric, hourKey)=> {

            console.log(metric)
            console.log('hour', hourKey)

            let splitedHour = []

            if(hourKey){

                splitedHour = hourKey.split(':')
            }

            if(metric.bpm){         
                const bpm = repoBpm.create({
                    health_metrics_id: healthReturn.id,
                    value: metric.bpm,
                    hour: new Date(0, 0, 0, Number(splitedHour[0]), Number(splitedHour[1]), 0)
                      })
                bpms.push(bpm)
                    
            }
            if(metric.pressureDiastolic){
                const pressureDiastolic = repoPressureDiastolic.create({
                    health_metrics_id: healthReturn.id,
                    value: metric.pressureDiastolic,
                    hour: new Date(0, 0, 0, Number(splitedHour[0]), Number(splitedHour[1]), 0)
                      })
                pressureDiastolics.push(pressureDiastolic)
                    
            }
            if(metric.pressureSystolic){
                const pressureSystolic = repoPressureSystolic.create({
                    health_metrics_id: healthReturn.id,
                    value: metric.pressureSystolic,
                    hour: new Date(0, 0, 0, Number(splitedHour[0]), Number(splitedHour[1]), 0)
                      })
                pressureSystolics.push(pressureSystolic)
                    
            }
        })
             
           await repoBpm.save(bpms)
           await repoPressureDiastolic.save(pressureDiastolics)
           await repoPressureSystolic.save(pressureSystolics)

        
        return user;
    
    }
}