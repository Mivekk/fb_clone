import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutReceiverInput } from "../inputs/FriendshipCreateWithoutReceiverInput";
import { FriendshipUpdateWithoutReceiverInput } from "../inputs/FriendshipUpdateWithoutReceiverInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutReceiverInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutReceiverInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutReceiverInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutReceiverInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutReceiverInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutReceiverInput;
}
