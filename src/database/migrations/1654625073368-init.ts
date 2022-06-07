import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654625073368 implements MigrationInterface {
    name = 'init1654625073368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "recipeCountry" character varying NOT NULL, "amount" integer NOT NULL, "organization" character varying NOT NULL, "transactionDate" date NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
