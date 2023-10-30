import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutSecond_userInput } from "../inputs/FriendshipCreateWithoutSecond_userInput";
import { FriendshipUpdateWithoutSecond_userInput } from "../inputs/FriendshipUpdateWithoutSecond_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutSecond_userInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutSecond_userInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutSecond_userInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutSecond_userInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutSecond_userInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutSecond_userInput;
}
