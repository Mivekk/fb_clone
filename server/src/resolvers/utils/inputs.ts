import {
  CommentWhereInput,
  PostOrderByWithRelationInput,
  PostWhereInput,
  PostWhereUniqueInput,
  ReactionType,
} from "../../generated/type-graphql";
import { InputType, Field, ArgsType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  image_url?: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
class CursorObject {
  @Field(() => Number)
  id: number;
}

@ArgsType()
class PaginationArgs {
  @Field(() => CursorObject, { nullable: true })
  cursor?: { id: number };

  @Field(() => Number)
  take: number;
}

@ArgsType()
export class PaginationCommentsArgs extends PaginationArgs {
  @Field(() => Number)
  postId: number;
}

@ArgsType()
export class PaginationPostsArgs extends PaginationArgs {
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput;
}

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;
}

@InputType()
export class AddCommentInput {
  @Field(() => Number)
  postId: number;

  @Field(() => String)
  body: string;
}

@InputType()
export class AddReactionInput {
  @Field(() => Number)
  postId: number;

  @Field(() => ReactionType)
  type: ReactionType;
}
