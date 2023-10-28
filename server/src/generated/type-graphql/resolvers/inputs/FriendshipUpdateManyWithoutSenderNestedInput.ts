import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySenderInputEnvelope } from "../inputs/FriendshipCreateManySenderInputEnvelope";
import { FriendshipCreateOrConnectWithoutSenderInput } from "../inputs/FriendshipCreateOrConnectWithoutSenderInput";
import { FriendshipCreateWithoutSenderInput } from "../inputs/FriendshipCreateWithoutSenderInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutSenderInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutSenderInput";
import { FriendshipUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutSenderInput";
import { FriendshipUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutSenderInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutSenderNestedInput", {})
export class FriendshipUpdateManyWithoutSenderNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutSenderInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  set?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  delete?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
