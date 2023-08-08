import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyAuthorInputEnvelope } from "../inputs/ReactionCreateManyAuthorInputEnvelope";
import { ReactionCreateOrConnectWithoutAuthorInput } from "../inputs/ReactionCreateOrConnectWithoutAuthorInput";
import { ReactionCreateWithoutAuthorInput } from "../inputs/ReactionCreateWithoutAuthorInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithWhereWithoutAuthorInput";
import { ReactionUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutAuthorInput";
import { ReactionUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateManyWithoutAuthorNestedInput", {})
export class ReactionUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionScalarWhereInput[] | undefined;
}
