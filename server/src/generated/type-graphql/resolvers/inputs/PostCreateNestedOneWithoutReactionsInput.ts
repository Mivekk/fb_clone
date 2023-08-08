import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutReactionsInput } from "../inputs/PostCreateOrConnectWithoutReactionsInput";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutReactionsInput", {})
export class PostCreateNestedOneWithoutReactionsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput, {
    nullable: true
  })
  create?: PostCreateWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReactionsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
