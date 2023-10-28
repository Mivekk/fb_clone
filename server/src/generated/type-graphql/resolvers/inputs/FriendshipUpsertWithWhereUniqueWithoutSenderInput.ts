import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutSenderInput } from "../inputs/FriendshipCreateWithoutSenderInput";
import { FriendshipUpdateWithoutSenderInput } from "../inputs/FriendshipUpdateWithoutSenderInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutSenderInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutSenderInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutSenderInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutSenderInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutSenderInput;
}
