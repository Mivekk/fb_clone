import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutSecond_userInput } from "../inputs/FriendshipCreateWithoutSecond_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateOrConnectWithoutSecond_userInput", {})
export class FriendshipCreateOrConnectWithoutSecond_userInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutSecond_userInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutSecond_userInput;
}
