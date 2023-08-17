import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionUpdateWithoutCommentInput } from "../inputs/ReactionUpdateWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutCommentInput", {})
export class ReactionUpsertWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: ReactionUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ReactionCreateWithoutCommentInput;
}
