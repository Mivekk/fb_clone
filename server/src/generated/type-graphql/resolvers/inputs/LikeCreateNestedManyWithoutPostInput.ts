import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyPostInputEnvelope } from "../inputs/LikeCreateManyPostInputEnvelope";
import { LikeCreateOrConnectWithoutPostInput } from "../inputs/LikeCreateOrConnectWithoutPostInput";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateNestedManyWithoutPostInput", {})
export class LikeCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutPostInput], {
    nullable: true
  })
  create?: LikeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => LikeCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: LikeCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;
}
