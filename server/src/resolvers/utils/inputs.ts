import {
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

@ArgsType()
export class PaginationArgs {
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput;

  @Field(() => Number, { nullable: true })
  cursor?: number;

  @Field(() => Number)
  take: number;
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
