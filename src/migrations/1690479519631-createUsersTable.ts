import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1690479519631 implements MigrationInterface {
    name = 'CreateUsersTable1690479519631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" RENAME COLUMN "nomeCompleto" TO "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nomeCompleto"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "nomeCompleto" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contatos" RENAME COLUMN "name" TO "nomeCompleto"`);
    }

}
