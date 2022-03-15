import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSystolicPressures1647310606127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "systolic_pressures",
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
                    name: "fk_systolic_pressures_health_metrics",
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
