import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutRepliesInput } from "../inputs/CommentCreateOrConnectWithoutRepliesInput";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutRepliesInput", {})
export class CommentCreateNestedOneWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: CommentCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
