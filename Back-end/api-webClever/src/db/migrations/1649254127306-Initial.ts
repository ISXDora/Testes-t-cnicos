import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1649254127306 implements MigrationInterface {
    name = 'Initial1649254127306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diastolic_pressures" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "health_metrics_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "hour" TIME NOT NULL, CONSTRAINT "PK_c2e439ba9d8320eb9b5256f2d18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "systolic_pressures" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "health_metrics_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "hour" TIME NOT NULL, CONSTRAINT "PK_d55a710ad5683861dce5ce3ef62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "health_metrics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "measurementDate" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2c89a8302441086a0fe3797e477" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bpms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "health_metrics_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "hour" TIME NOT NULL, CONSTRAINT "PK_ffe0bd138e889dcc3ec617b0b8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" ADD CONSTRAINT "FK_4b12a5d716f30a23b48140ccca7" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "systolic_pressures" ADD CONSTRAINT "FK_d6e2f8eb3743000ed07a8ffc0ee" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "health_metrics" ADD CONSTRAINT "FK_7e75554556598bce9347a6ad803" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bpms" ADD CONSTRAINT "FK_6805c4e3f621cf31ef7d832b200" FOREIGN KEY ("health_metrics_id") REFERENCES "health_metrics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bpms" DROP CONSTRAINT "FK_6805c4e3f621cf31ef7d832b200"`);
        await queryRunner.query(`ALTER TABLE "health_metrics" DROP CONSTRAINT "FK_7e75554556598bce9347a6ad803"`);
        await queryRunner.query(`ALTER TABLE "systolic_pressures" DROP CONSTRAINT "FK_d6e2f8eb3743000ed07a8ffc0ee"`);
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" DROP CONSTRAINT "FK_4b12a5d716f30a23b48140ccca7"`);
        await queryRunner.query(`DROP TABLE "bpms"`);
        await queryRunner.query(`DROP TABLE "health_metrics"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "systolic_pressures"`);
        await queryRunner.query(`DROP TABLE "diastolic_pressures"`);
    }

}
