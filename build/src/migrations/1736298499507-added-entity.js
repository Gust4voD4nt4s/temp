"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddedEntity1736298499507 = void 0;
class AddedEntity1736298499507 {
    constructor() {
        this.name = 'AddedEntity1736298499507';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TYPE "public"."user_role_enum" RENAME TO "user_role_enum_old"`);
            yield queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin')`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum" USING "role"::"text"::"public"."user_role_enum"`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'admin'`);
            yield queryRunner.query(`DROP TYPE "public"."user_role_enum_old"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."user_role_enum_old" AS ENUM('admin')`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum_old" USING "role"::"text"::"public"."user_role_enum_old"`);
            yield queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'admin'`);
            yield queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
            yield queryRunner.query(`ALTER TYPE "public"."user_role_enum_old" RENAME TO "user_role_enum"`);
        });
    }
}
exports.AddedEntity1736298499507 = AddedEntity1736298499507;
//# sourceMappingURL=1736298499507-added-entity.js.map