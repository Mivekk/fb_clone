import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFriendsInput } from "../inputs/UserCreateWithoutFriendsInput";
import { UserUpdateWithoutFriendsInput } from "../inputs/UserUpdateWithoutFriendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFriendsInput", {})
export class UserUpsertWithWhereUniqueWithoutFriendsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFriendsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFriendsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFriendsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFriendsInput;
}
