import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHealthMetrics1647299419912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "health_metrics",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "measurement_date",
                    type: "date"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                }
            ],
            foreignKeys: [
                {
                    name: "fk_health_metrics_user",
                    columnNames: ["user_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"] 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('health_metrics')
    }

}
