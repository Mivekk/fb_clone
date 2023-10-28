import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyReceiverInputEnvelope } from "../inputs/FriendshipCreateManyReceiverInputEnvelope";
import { FriendshipCreateOrConnectWithoutReceiverInput } from "../inputs/FriendshipCreateOrConnectWithoutReceiverInput";
import { FriendshipCreateWithoutReceiverInput } from "../inputs/FriendshipCreateWithoutReceiverInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutReceiverInput", {})
export class FriendshipCreateNestedManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
