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
export class PostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;
}

@InputType()
export class CommentInput {
  @Field(() => Number)
  postId: number;

  @Field(() => String)
  body: string;
}
