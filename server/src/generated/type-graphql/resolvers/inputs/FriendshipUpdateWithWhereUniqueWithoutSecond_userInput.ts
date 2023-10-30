import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutSecond_userInput } from "../inputs/FriendshipUpdateWithoutSecond_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutSecond_userInput", {})
export class FriendshipUpdateWithWhereUniqueWithoutSecond_userInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutSecond_userInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutSecond_userInput;
}
