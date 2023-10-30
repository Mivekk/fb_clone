import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFirst_userInput } from "../inputs/FriendshipCreateWithoutFirst_userInput";
import { FriendshipUpdateWithoutFirst_userInput } from "../inputs/FriendshipUpdateWithoutFirst_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutFirst_userInput", {})
export class FriendshipUpsertWithWhereUniqueWithoutFirst_userInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFirst_userInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutFirst_userInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFirst_userInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFirst_userInput;
}
