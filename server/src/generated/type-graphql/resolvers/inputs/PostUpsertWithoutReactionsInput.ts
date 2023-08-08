import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostUpdateWithoutReactionsInput } from "../inputs/PostUpdateWithoutReactionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutReactionsInput", {})
export class PostUpsertWithoutReactionsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutReactionsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput, {
    nullable: false
  })
  create!: PostCreateWithoutReactionsInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
