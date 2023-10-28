import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFriendshipsInput } from "../inputs/UserCreateWithoutFriendshipsInput";
import { UserUpdateWithoutFriendshipsInput } from "../inputs/UserUpdateWithoutFriendshipsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutFriendshipsInput", {})
export class UserUpsertWithoutFriendshipsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFriendshipsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFriendshipsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFriendshipsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFriendshipsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
