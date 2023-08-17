import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateOrConnectWithoutCommentInput", {})
export class ReactionCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReactionWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ReactionCreateWithoutCommentInput;
}
