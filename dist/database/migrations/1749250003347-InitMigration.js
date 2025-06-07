"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMigration1749250003347 = void 0;
class InitMigration1749250003347 {
    name = 'InitMigration1749250003347';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "task"`);
    }
}
exports.InitMigration1749250003347 = InitMigration1749250003347;
//# sourceMappingURL=1749250003347-InitMigration.js.map