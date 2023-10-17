import { ObjectType, Field } from "type-graphql";

import {
  User,
  Post,
  Comment,
  ReactionType,
  Reaction,
} from "../../generated/type-graphql";

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

@ObjectType()
export class PaginatedPostsObject {
  @Field(() => [Post])
  posts: Post[];

  @Field(() => Boolean)
  hasMore: boolean;
}

@ObjectType()
export class CommentObject {
  @Field(() => Comment)
  comment: Comment;

  @Field(() => Boolean)
  hasReplies: boolean;
}

@ObjectType()
export class PaginatedCommentsObject {
  @Field(() => [CommentObject])
  comments: CommentObject[];

  @Field(() => Number)
  commentCount: number;

  @Field(() => Boolean)
  hasMore: boolean;
}

@ObjectType()
export class ReactionsObject {
  @Field(() => ReactionType, { nullable: true })
  voted?: ReactionType;

  @Field(() => [Reaction], { nullable: true })
  reactions?: Reaction[];

  @Field(() => Number)
  likeCount: number;

  @Field(() => Number)
  dislikeCount: number;
}
