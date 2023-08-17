import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReplyInputEnvelope } from "../inputs/CommentCreateManyReplyInputEnvelope";
import { CommentCreateOrConnectWithoutReplyInput } from "../inputs/CommentCreateOrConnectWithoutReplyInput";
import { CommentCreateWithoutReplyInput } from "../inputs/CommentCreateWithoutReplyInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutReplyInput } from "../inputs/CommentUpdateManyWithWhereWithoutReplyInput";
import { CommentUpdateWithWhereUniqueWithoutReplyInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutReplyInput";
import { CommentUpsertWithWhereUniqueWithoutReplyInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutReplyInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutReplyNestedInput", {})
export class CommentUpdateManyWithoutReplyNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutReplyInput], {
    nullable: true
  })
  create?: CommentCreateWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutReplyInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutReplyInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyReplyInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyReplyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutReplyInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutReplyInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
