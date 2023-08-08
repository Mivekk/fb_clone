import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyPostInputEnvelope } from "../inputs/ReactionCreateManyPostInputEnvelope";
import { ReactionCreateOrConnectWithoutPostInput } from "../inputs/ReactionCreateOrConnectWithoutPostInput";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutPostInput } from "../inputs/ReactionUpdateManyWithWhereWithoutPostInput";
import { ReactionUpdateWithWhereUniqueWithoutPostInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutPostInput";
import { ReactionUpsertWithWhereUniqueWithoutPostInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateManyWithoutPostNestedInput", {})
export class ReactionUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutPostInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  set?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  delete?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: ReactionUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: ReactionUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionScalarWhereInput[] | undefined;
}
