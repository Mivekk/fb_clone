import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutReplyInput } from "../inputs/CommentCreateNestedManyWithoutReplyInput";
import { CommentCreateNestedOneWithoutRepliesInput } from "../inputs/CommentCreateNestedOneWithoutRepliesInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateWithoutAuthorInput", {})
export class CommentCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

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

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutRepliesInput, {
    nullable: true
  })
  reply?: CommentCreateNestedOneWithoutRepliesInput | undefined;
}
