import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1691001580708 implements MigrationInterface {
    name = 'CreateUserTable1691001580708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "telefone" character varying(10) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contatos" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(45) NOT NULL, "telefone" character varying(10) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_58a04ab74b45da858bb73756b60" UNIQUE ("email"), CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_db1ed6d13afe6b6184cc72bb906" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_db1ed6d13afe6b6184cc72bb906"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
