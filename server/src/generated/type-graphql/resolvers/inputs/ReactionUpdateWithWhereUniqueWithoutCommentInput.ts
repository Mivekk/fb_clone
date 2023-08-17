import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionUpdateWithoutCommentInput } from "../inputs/ReactionUpdateWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutCommentInput", {})
export class ReactionUpdateWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutCommentInput, {
    nullable: false
  })
  data!: ReactionUpdateWithoutCommentInput;
}
