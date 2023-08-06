import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeCreateInput } from "../../../inputs/LikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLikeArgs {
  @TypeGraphQL.Field(_type => LikeCreateInput, {
    nullable: false
  })
  data!: LikeCreateInput;
}
