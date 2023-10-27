import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPrisma_friendsInput } from "../inputs/UserCreateWithoutPrisma_friendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPrisma_friendsInput", {})
export class UserCreateOrConnectWithoutPrisma_friendsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPrisma_friendsInput;
}
