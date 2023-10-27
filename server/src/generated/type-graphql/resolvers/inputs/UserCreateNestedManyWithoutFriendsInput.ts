import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFriendsInput } from "../inputs/UserCreateOrConnectWithoutFriendsInput";
import { UserCreateWithoutFriendsInput } from "../inputs/UserCreateWithoutFriendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutFriendsInput", {})
export class UserCreateNestedManyWithoutFriendsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFriendsInput], {
    nullable: true
  })
  create?: UserCreateWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFriendsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
