import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyCommentInputEnvelope } from "../inputs/ReactionCreateManyCommentInputEnvelope";
import { ReactionCreateOrConnectWithoutCommentInput } from "../inputs/ReactionCreateOrConnectWithoutCommentInput";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateNestedManyWithoutCommentInput", {})
export class ReactionCreateNestedManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutCommentInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionWhereUniqueInput[] | undefined;
}
