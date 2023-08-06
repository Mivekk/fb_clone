import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateOrConnectWithoutPostInput", {})
export class LikeCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutPostInput, {
    nullable: false
  })
  create!: LikeCreateWithoutPostInput;
}
