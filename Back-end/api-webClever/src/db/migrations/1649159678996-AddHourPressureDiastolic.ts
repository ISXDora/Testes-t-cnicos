import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHourPressureDiastolic1649159678996 implements MigrationInterface {
    name = 'AddHourPressureDiastolic1649159678996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diastolic_pressures" DROP COLUMN "hour"`);
    }

}
