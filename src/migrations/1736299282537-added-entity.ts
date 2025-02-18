import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1736299282537 implements MigrationInterface {
    name = 'AddedEntity1736299282537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "headquarters" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "city" character varying(50) NOT NULL, "phone" character varying(24) NOT NULL, "email" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, CONSTRAINT "PK_f9e4eae5e864a9400f279720cf2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'admin', "phone" character varying(12), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "email_index" ON "user" ("email") `);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "originalname" character varying NOT NULL, "filename" character varying NOT NULL, "property_id" integer, "hadquarter_id" integer, "user_id" integer, CONSTRAINT "REL_decdf86f650fb765dac7bd091a" UNIQUE ("user_id"), CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "type_property" character varying NOT NULL, "type_purchase" character varying NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" double precision NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" double precision NOT NULL, "bedrooms_quantity" integer, "toilet_quantity" integer, "garage_quantity" integer, "status" character varying NOT NULL, "poll" boolean NOT NULL DEFAULT false, "pool_size" integer, "grill" boolean NOT NULL DEFAULT false, "balcony" boolean NOT NULL DEFAULT false, "gym" boolean NOT NULL DEFAULT false, "recreation_area" boolean NOT NULL DEFAULT false, "gardem" boolean NOT NULL DEFAULT false, "party_room" boolean NOT NULL DEFAULT false, "game_room" boolean NOT NULL DEFAULT false, "elevator" boolean NOT NULL DEFAULT false, "camera_monitoring" boolean NOT NULL DEFAULT false, "hydromassage" boolean NOT NULL DEFAULT false, "sauna" boolean NOT NULL DEFAULT false, "cinema" boolean NOT NULL DEFAULT false, "bike_rack" boolean NOT NULL DEFAULT false, "accessibility" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b2ec2b62f2ac09a63d3424705f0" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_e047322fc4e6c69b7be5385b1dd" FOREIGN KEY ("hadquarter_id") REFERENCES "headquarters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_decdf86f650fb765dac7bd091a6" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_decdf86f650fb765dac7bd091a6"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_e047322fc4e6c69b7be5385b1dd"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b2ec2b62f2ac09a63d3424705f0"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP INDEX "public"."email_index"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "headquarters"`);
    }

}
