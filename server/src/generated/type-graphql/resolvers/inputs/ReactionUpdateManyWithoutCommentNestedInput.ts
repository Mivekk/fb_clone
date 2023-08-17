import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyCommentInputEnvelope } from "../inputs/ReactionCreateManyCommentInputEnvelope";
import { ReactionCreateOrConnectWithoutCommentInput } from "../inputs/ReactionCreateOrConnectWithoutCommentInput";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutCommentInput } from "../inputs/ReactionUpdateManyWithWhereWithoutCommentInput";
import { ReactionUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutCommentInput";
import { ReactionUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionUpdateManyWithoutCommentNestedInput", {})
export class ReactionUpdateManyWithoutCommentNestedInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutCommentInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  upsert?: ReactionUpsertWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyCommentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  update?: ReactionUpdateWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutCommentInput], {
    nullable: true
  })
  updateMany?: ReactionUpdateManyWithWhereWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionScalarWhereInput[] | undefined;
}
