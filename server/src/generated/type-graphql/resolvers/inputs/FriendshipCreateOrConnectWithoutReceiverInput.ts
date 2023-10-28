import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutReceiverInput } from "../inputs/FriendshipCreateWithoutReceiverInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateOrConnectWithoutReceiverInput", {})
export class FriendshipCreateOrConnectWithoutReceiverInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutReceiverInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutReceiverInput;
}
