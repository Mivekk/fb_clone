import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutRepliesInput } from "../inputs/CommentUpdateWithoutRepliesInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType("CommentUpdateToOneWithWhereWithoutRepliesInput", {})
export class CommentUpdateToOneWithWhereWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutRepliesInput;
}
