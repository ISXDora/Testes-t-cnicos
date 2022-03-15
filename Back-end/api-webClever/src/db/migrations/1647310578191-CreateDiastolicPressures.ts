import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDiastolicPressures1647310578191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "diastolic_pressures",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "value",
                    type: "integer"
                },
                {
                    name: "health_metrics_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
                {
                    name: "fk_diastolic_pressures_health_metrics",
                    columnNames: ["health_metrics_id"],
                    referencedTableName: "health_metrics",
                    referencedColumnNames: ["id"] 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
