import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompany1626470156721 implements MigrationInterface {
    name = 'CreateCompany1626470156721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "cnpj" character varying(14) NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
