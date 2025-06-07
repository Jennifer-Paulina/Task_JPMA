import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitMigration1749250003347 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
