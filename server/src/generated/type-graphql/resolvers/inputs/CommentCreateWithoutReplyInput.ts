import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutReplyInput } from "../inputs/CommentCreateNestedManyWithoutReplyInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutReplyInput", {})
export class CommentCreateWithoutReplyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image_url?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutCommentInput, {
    nullable: true
  })
  reactions?: ReactionCreateNestedManyWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutReplyInput, {
    nullable: true
  })
  replies?: CommentCreateNestedManyWithoutReplyInput | undefined;
}
