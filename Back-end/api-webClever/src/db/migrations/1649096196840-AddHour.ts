import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHour1649096196840 implements MigrationInterface {
    name = 'AddHour1649096196840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "health_metrics" DROP CONSTRAINT "fk_health_metrics_user"`);
        await queryRunner.query(`ALTER TABLE "bpms" DROP CONSTRAINT "fk_bpms_health_metrics"`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" DROP CONSTRAINT "fk_diastolic_pressures_health_metrics"`);
        await queryRunner.query(`ALTER TABLE "systolic_pressures" DROP CONSTRAINT "fk_systolic_pressures_health_metrics"`);
        await queryRunner.query(`ALTER TABLE "bpms" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "health_metrics" DROP COLUMN "measurementDate"`);
        await queryRunner.query(`ALTER TABLE "health_metrics" ADD "measurementDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "health_metrics" ADD CONSTRAINT "FK_7e75554556598bce9347a6ad803" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bpms" ADD CONSTRAINT "FK_6805c4e3f621cf31ef7d832b200" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" ADD CONSTRAINT "FK_4b12a5d716f30a23b48140ccca7" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "systolic_pressures" ADD CONSTRAINT "FK_d6e2f8eb3743000ed07a8ffc0ee" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systolic_pressures" DROP CONSTRAINT "FK_d6e2f8eb3743000ed07a8ffc0ee"`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" DROP CONSTRAINT "FK_4b12a5d716f30a23b48140ccca7"`);
        await queryRunner.query(`ALTER TABLE "bpms" DROP CONSTRAINT "FK_6805c4e3f621cf31ef7d832b200"`);
        await queryRunner.query(`ALTER TABLE "health_metrics" DROP CONSTRAINT "FK_7e75554556598bce9347a6ad803"`);
        await queryRunner.query(`ALTER TABLE "health_metrics" DROP COLUMN "measurementDate"`);
        await queryRunner.query(`ALTER TABLE "health_metrics" ADD "measurementDate" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bpms" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "systolic_pressures" ADD CONSTRAINT "fk_systolic_pressures_health_metrics" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" ADD CONSTRAINT "fk_diastolic_pressures_health_metrics" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bpms" ADD CONSTRAINT "fk_bpms_health_metrics" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "health_metrics" ADD CONSTRAINT "fk_health_metrics_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
