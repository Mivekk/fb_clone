import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeCreateManyInput } from "../../../inputs/LikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLikeArgs {
  @TypeGraphQL.Field(_type => [LikeCreateManyInput], {
    nullable: false
  })
  data!: LikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
