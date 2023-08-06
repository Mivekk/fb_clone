import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("LikeCreateInput", {})
export class LikeCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutLikesInput;
}
