import { ObjectType, Field } from "type-graphql";

import { User, Post, Comment } from "../../generated/type-graphql";

@ObjectType()
export class RegisterResponseObject {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class LoginResponseObject extends RegisterResponseObject {
  @Field(() => String, { nullable: true })
  accessToken?: string;
}

@ObjectType()
export class CreatePostResponseObject {
  @Field(() => Post, { nullable: true })
  post?: Post;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class PostEngagementMetricsObject {
  @Field(() => Number)
  comments: number;

  @Field(() => Number)
  likes: number;

  @Field(() => Number)
  dislikes: number;
}

@ObjectType()
export class AddCommentResponseObject {
  @Field(() => Comment, { nullable: true })
  comment?: Comment;

  @Field(() => String, { nullable: true })
  error?: string;
}
