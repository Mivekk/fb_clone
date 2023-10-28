import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFriendshipsInput } from "../inputs/UserCreateOrConnectWithoutFriendshipsInput";
import { UserCreateWithoutFriendshipsInput } from "../inputs/UserCreateWithoutFriendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFriendshipsInput", {})
export class UserCreateNestedOneWithoutFriendshipsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFriendshipsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFriendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFriendshipsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFriendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
