import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionCreateManyInput } from "../../../inputs/ReactionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReactionArgs {
  @TypeGraphQL.Field(_type => [ReactionCreateManyInput], {
    nullable: false
  })
  data!: ReactionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
