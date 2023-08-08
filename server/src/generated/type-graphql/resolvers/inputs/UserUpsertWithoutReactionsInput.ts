import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionsInput } from "../inputs/UserCreateWithoutReactionsInput";
import { UserUpdateWithoutReactionsInput } from "../inputs/UserUpdateWithoutReactionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutReactionsInput", {})
export class UserUpsertWithoutReactionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
