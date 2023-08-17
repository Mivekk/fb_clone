import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionWhereInput } from "../../inputs/ReactionWhereInput";

@TypeGraphQL.ArgsType()
export class CommentCountReactionsArgs {
  @TypeGraphQL.Field(_type => ReactionWhereInput, {
    nullable: true
  })
  where?: ReactionWhereInput | undefined;
}
