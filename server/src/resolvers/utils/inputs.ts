import { InputType, Field } from "type-graphql";

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
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
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
export class AddLikeInput {
  @Field(() => Number)
  postId: number;

  @Field(() => Number)
  value: number;
}
