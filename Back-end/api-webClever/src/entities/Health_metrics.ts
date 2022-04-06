import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Bpm } from './Bpm';
import { Diastolic_Pressure } from './Diastolic_pressure';
import { Systolic_Pressure } from './Systolic_pressure';
import { User } from './User';

@Entity('health_metrics')
export class Health_Metric {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.health_Metrics)
    @JoinColumn({name: "user_id"})
    user: User;

    @Column()
    user_id: string;

    @Column()
    measurementDate: Date;

    @OneToMany(() => Bpm, bpm => bpm.metric)
    bpms: Bpm[];

    @OneToMany(() => Diastolic_Pressure, diastolic_pressure => diastolic_pressure.metric)
    diastolics_pressure: Diastolic_Pressure[];

    @OneToMany(() => Systolic_Pressure, systolic_pressure => systolic_pressure.metric)
    systolics_pressure: Systolic_Pressure[];
      

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

//() => User, (user) => user.photos