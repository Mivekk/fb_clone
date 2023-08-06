import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeUpdateWithoutPostInput } from "../inputs/LikeUpdateWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutPostInput", {})
export class LikeUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutPostInput, {
    nullable: false
  })
  data!: LikeUpdateWithoutPostInput;
}
