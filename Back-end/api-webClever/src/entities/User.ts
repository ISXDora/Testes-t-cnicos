import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Health_Metric } from './Health_metrics';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => Health_Metric, (health_metric) => health_metric.user)
    health_Metrics: Health_Metric[];

    @CreateDateColumn()
    created_at: Date;
}

//() => Photo, (photo) => photo.user