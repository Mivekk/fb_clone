import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutRepliesInput", {})
export class CommentCreateOrConnectWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: CommentCreateWithoutRepliesInput;
}
