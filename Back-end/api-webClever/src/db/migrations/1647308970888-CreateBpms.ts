import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBpms1647308970888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name: "bpms",
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
                    name: "fk_bpms_health_metrics",
                    columnNames: ["health_metrics_id"],
                    referencedTableName: "health_metrics",
                    referencedColumnNames: ["id"] 
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bpms')
    }

}
