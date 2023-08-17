import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentUpdateWithoutRepliesInput } from "../inputs/CommentUpdateWithoutRepliesInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType("CommentUpsertWithoutRepliesInput", {})
export class CommentUpsertWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: CommentCreateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;
}
