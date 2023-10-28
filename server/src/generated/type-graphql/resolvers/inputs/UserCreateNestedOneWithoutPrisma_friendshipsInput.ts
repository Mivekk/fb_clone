import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPrisma_friendshipsInput } from "../inputs/UserCreateOrConnectWithoutPrisma_friendshipsInput";
import { UserCreateWithoutPrisma_friendshipsInput } from "../inputs/UserCreateWithoutPrisma_friendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPrisma_friendshipsInput", {})
export class UserCreateNestedOneWithoutPrisma_friendshipsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPrisma_friendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPrisma_friendshipsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPrisma_friendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
