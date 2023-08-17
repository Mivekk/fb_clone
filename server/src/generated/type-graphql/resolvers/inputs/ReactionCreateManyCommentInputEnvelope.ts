import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyCommentInput } from "../inputs/ReactionCreateManyCommentInput";

@TypeGraphQL.InputType("ReactionCreateManyCommentInputEnvelope", {})
export class ReactionCreateManyCommentInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionCreateManyCommentInput], {
    nullable: false
  })
  data!: ReactionCreateManyCommentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
