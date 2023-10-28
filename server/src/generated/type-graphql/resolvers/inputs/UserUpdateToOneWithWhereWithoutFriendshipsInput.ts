import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutFriendshipsInput } from "../inputs/UserUpdateWithoutFriendshipsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutFriendshipsInput", {})
export class UserUpdateToOneWithWhereWithoutFriendshipsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFriendshipsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutFriendshipsInput;
}
