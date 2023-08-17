import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutRepliesInput } from "../inputs/CommentCreateOrConnectWithoutRepliesInput";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentUpdateToOneWithWhereWithoutRepliesInput } from "../inputs/CommentUpdateToOneWithWhereWithoutRepliesInput";
import { CommentUpsertWithoutRepliesInput } from "../inputs/CommentUpsertWithoutRepliesInput";
import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneWithoutRepliesNestedInput", {})
export class CommentUpdateOneWithoutRepliesNestedInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: CommentCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutRepliesInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  disconnect?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  delete?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateToOneWithWhereWithoutRepliesInput, {
    nullable: true
  })
  update?: CommentUpdateToOneWithWhereWithoutRepliesInput | undefined;
}
