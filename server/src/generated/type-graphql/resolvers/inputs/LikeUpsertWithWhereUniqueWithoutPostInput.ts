import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeUpdateWithoutPostInput } from "../inputs/LikeUpdateWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutPostInput", {})
export class LikeUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutPostInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutPostInput, {
    nullable: false
  })
  create!: LikeCreateWithoutPostInput;
}
