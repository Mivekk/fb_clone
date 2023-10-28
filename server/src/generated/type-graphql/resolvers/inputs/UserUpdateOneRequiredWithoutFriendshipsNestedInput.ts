import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFriendshipsInput } from "../inputs/UserCreateOrConnectWithoutFriendshipsInput";
import { UserCreateWithoutFriendshipsInput } from "../inputs/UserCreateWithoutFriendshipsInput";
import { UserUpdateToOneWithWhereWithoutFriendshipsInput } from "../inputs/UserUpdateToOneWithWhereWithoutFriendshipsInput";
import { UserUpsertWithoutFriendshipsInput } from "../inputs/UserUpsertWithoutFriendshipsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFriendshipsNestedInput", {})
export class UserUpdateOneRequiredWithoutFriendshipsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFriendshipsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFriendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFriendshipsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFriendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFriendshipsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFriendshipsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutFriendshipsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutFriendshipsInput | undefined;
}
