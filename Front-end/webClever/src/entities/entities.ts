
export interface UserData {
    id: string
    name: string
    birthDate: string
    created_at: string
    health_Metrics: HealthMetric[]
  }
  
  export interface HealthMetric {
    id: string
    user_id: string
    measurementDate: string
    created_at: string
    updated_at: string
    bpms: Bpm[]
    diastolics_pressure: DiastolicsPressure[]
    systolics_pressure: SystolicsPressure[]
  }
  
  export interface Bpm {
    id: string
    value: number
    health_metrics_id: string
    created_at: string
    hour: string
  }
  
  export interface DiastolicsPressure {
    id: string
    value: number
    health_metrics_id: string
    created_at: string
    hour: string
  }
  
  export interface SystolicsPressure {
    id: string
    value: number
    health_metrics_id: string
    created_at: string
    hour: string
  }
  