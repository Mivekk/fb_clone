import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutReplyInput } from "../inputs/CommentCreateWithoutReplyInput";
import { CommentUpdateWithoutReplyInput } from "../inputs/CommentUpdateWithoutReplyInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutReplyInput", {})
export class CommentUpsertWithWhereUniqueWithoutReplyInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutReplyInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutReplyInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutReplyInput, {
    nullable: false
  })
  create!: CommentCreateWithoutReplyInput;
}
