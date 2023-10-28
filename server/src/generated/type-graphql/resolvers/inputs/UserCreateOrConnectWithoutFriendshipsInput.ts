import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFriendshipsInput } from "../inputs/UserCreateWithoutFriendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFriendshipsInput", {})
export class UserCreateOrConnectWithoutFriendshipsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFriendshipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFriendshipsInput;
}
