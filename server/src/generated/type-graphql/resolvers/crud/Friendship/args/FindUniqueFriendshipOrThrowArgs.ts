import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipWhereUniqueInput } from "../../../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFriendshipOrThrowArgs {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;
}