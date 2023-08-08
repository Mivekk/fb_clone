import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutReactionsInput } from "../inputs/PostUpdateWithoutReactionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutReactionsInput", {})
export class PostUpdateToOneWithWhereWithoutReactionsInput {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutReactionsInput, {
    nullable: false
  })
  data!: PostUpdateWithoutReactionsInput;
}
