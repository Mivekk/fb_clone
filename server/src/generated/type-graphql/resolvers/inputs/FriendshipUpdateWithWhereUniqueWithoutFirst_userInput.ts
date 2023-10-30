import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutFirst_userInput } from "../inputs/FriendshipUpdateWithoutFirst_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutFirst_userInput", {})
export class FriendshipUpdateWithWhereUniqueWithoutFirst_userInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFirst_userInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutFirst_userInput;
}
