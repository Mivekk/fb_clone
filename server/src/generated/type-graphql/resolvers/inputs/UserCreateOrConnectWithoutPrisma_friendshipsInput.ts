import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPrisma_friendshipsInput } from "../inputs/UserCreateWithoutPrisma_friendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPrisma_friendshipsInput", {})
export class UserCreateOrConnectWithoutPrisma_friendshipsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendshipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPrisma_friendshipsInput;
}
