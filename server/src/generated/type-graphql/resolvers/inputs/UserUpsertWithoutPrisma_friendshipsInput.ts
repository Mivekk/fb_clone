import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPrisma_friendshipsInput } from "../inputs/UserCreateWithoutPrisma_friendshipsInput";
import { UserUpdateWithoutPrisma_friendshipsInput } from "../inputs/UserUpdateWithoutPrisma_friendshipsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPrisma_friendshipsInput", {})
export class UserUpsertWithoutPrisma_friendshipsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPrisma_friendshipsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPrisma_friendshipsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendshipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPrisma_friendshipsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
