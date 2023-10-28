import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPrisma_friendshipsInput } from "../inputs/UserCreateOrConnectWithoutPrisma_friendshipsInput";
import { UserCreateWithoutPrisma_friendshipsInput } from "../inputs/UserCreateWithoutPrisma_friendshipsInput";
import { UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput } from "../inputs/UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput";
import { UserUpsertWithoutPrisma_friendshipsInput } from "../inputs/UserUpsertWithoutPrisma_friendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput", {})
export class UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPrisma_friendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPrisma_friendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPrisma_friendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput | undefined;
}
