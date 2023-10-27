import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFriendsInput } from "../inputs/UserCreateOrConnectWithoutFriendsInput";
import { UserCreateWithoutFriendsInput } from "../inputs/UserCreateWithoutFriendsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFriendsInput } from "../inputs/UserUpdateManyWithWhereWithoutFriendsInput";
import { UserUpdateWithWhereUniqueWithoutFriendsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFriendsInput";
import { UserUpsertWithWhereUniqueWithoutFriendsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFriendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutFriendsNestedInput", {})
export class UserUpdateManyWithoutFriendsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFriendsInput], {
    nullable: true
  })
  create?: UserCreateWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFriendsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFriendsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFriendsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFriendsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutFriendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
