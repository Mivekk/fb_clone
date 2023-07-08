import { User } from "../generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ResponseObject {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  error?: string;
}
