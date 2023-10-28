import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyReceiverInputEnvelope } from "../inputs/FriendshipCreateManyReceiverInputEnvelope";
import { FriendshipCreateOrConnectWithoutReceiverInput } from "../inputs/FriendshipCreateOrConnectWithoutReceiverInput";
import { FriendshipCreateWithoutReceiverInput } from "../inputs/FriendshipCreateWithoutReceiverInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutReceiverInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutReceiverInput";
import { FriendshipUpdateWithWhereUniqueWithoutReceiverInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutReceiverInput";
import { FriendshipUpsertWithWhereUniqueWithoutReceiverInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutReceiverInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutReceiverNestedInput", {})
export class FriendshipUpdateManyWithoutReceiverNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyReceiverInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutReceiverInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
