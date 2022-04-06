import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Health_Metric } from './Health_metrics';

@Entity('systolic_pressures')
export class Systolic_Pressure {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    value: number;

    @Column()
    health_metrics_id: string;

    @ManyToOne(() => Health_Metric, health_metric => health_metric.systolics_pressure)
    @JoinColumn({name: "health_metrics_id"})
    metric: Health_Metric;

    @CreateDateColumn()
    created_at: Date;

    @Column('time')
    hour: Date;
}
