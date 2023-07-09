import { ObjectType, Field } from "type-graphql";

import { User, Post, Comment } from "../../generated/type-graphql";

@ObjectType()
export class UserResponseObject {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class PostResponseObject {
  @Field(() => Post, { nullable: true })
  post?: Post;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class CommentResponseObject {
  @Field(() => Comment, { nullable: true })
  comment?: Comment;

  @Field(() => String, { nullable: true })
  error?: string;
}
