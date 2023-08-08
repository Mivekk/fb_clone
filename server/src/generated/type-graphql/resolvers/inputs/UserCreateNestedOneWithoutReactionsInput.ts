import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReactionsInput } from "../inputs/UserCreateOrConnectWithoutReactionsInput";
import { UserCreateWithoutReactionsInput } from "../inputs/UserCreateWithoutReactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionsInput", {})
export class UserCreateNestedOneWithoutReactionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
