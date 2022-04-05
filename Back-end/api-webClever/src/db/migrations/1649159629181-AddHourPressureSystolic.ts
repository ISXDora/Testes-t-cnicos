import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHourPressureSystolic1649159629181 implements MigrationInterface {
    name = 'AddHourPressureSystolic1649159629181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systolic_pressures" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systolic_pressures" DROP COLUMN "hour"`);
    }

}
