import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutReactionsInput } from "../inputs/PostCreateOrConnectWithoutReactionsInput";
import { PostCreateWithoutReactionsInput } from "../inputs/PostCreateWithoutReactionsInput";
import { PostUpdateToOneWithWhereWithoutReactionsInput } from "../inputs/PostUpdateToOneWithWhereWithoutReactionsInput";
import { PostUpsertWithoutReactionsInput } from "../inputs/PostUpsertWithoutReactionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutReactionsNestedInput", {})
export class PostUpdateOneRequiredWithoutReactionsNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput, {
    nullable: true
  })
  create?: PostCreateWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReactionsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutReactionsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutReactionsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutReactionsInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutReactionsInput | undefined;
}
