import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyPostInputEnvelope } from "../inputs/LikeCreateManyPostInputEnvelope";
import { LikeCreateOrConnectWithoutPostInput } from "../inputs/LikeCreateOrConnectWithoutPostInput";
import { LikeCreateWithoutPostInput } from "../inputs/LikeCreateWithoutPostInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutPostInput } from "../inputs/LikeUpdateManyWithWhereWithoutPostInput";
import { LikeUpdateWithWhereUniqueWithoutPostInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutPostInput";
import { LikeUpsertWithWhereUniqueWithoutPostInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutPostInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateManyWithoutPostNestedInput", {})
export class LikeUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutPostInput], {
    nullable: true
  })
  create?: LikeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: LikeUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => LikeCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: LikeCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  set?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  delete?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: LikeUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: LikeUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikeScalarWhereInput[] | undefined;
}
