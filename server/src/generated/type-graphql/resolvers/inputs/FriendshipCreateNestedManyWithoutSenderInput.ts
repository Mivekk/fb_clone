import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySenderInputEnvelope } from "../inputs/FriendshipCreateManySenderInputEnvelope";
import { FriendshipCreateOrConnectWithoutSenderInput } from "../inputs/FriendshipCreateOrConnectWithoutSenderInput";
import { FriendshipCreateWithoutSenderInput } from "../inputs/FriendshipCreateWithoutSenderInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutSenderInput", {})
export class FriendshipCreateNestedManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutSenderInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
