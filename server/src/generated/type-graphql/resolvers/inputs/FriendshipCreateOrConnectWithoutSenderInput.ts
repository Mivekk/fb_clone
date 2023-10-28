import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutSenderInput } from "../inputs/FriendshipCreateWithoutSenderInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateOrConnectWithoutSenderInput", {})
export class FriendshipCreateOrConnectWithoutSenderInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutSenderInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutSenderInput;
}
