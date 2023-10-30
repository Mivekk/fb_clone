import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFirst_userInputEnvelope } from "../inputs/FriendshipCreateManyFirst_userInputEnvelope";
import { FriendshipCreateOrConnectWithoutFirst_userInput } from "../inputs/FriendshipCreateOrConnectWithoutFirst_userInput";
import { FriendshipCreateWithoutFirst_userInput } from "../inputs/FriendshipCreateWithoutFirst_userInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutFirst_userInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutFirst_userInput";
import { FriendshipUpdateWithWhereUniqueWithoutFirst_userInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutFirst_userInput";
import { FriendshipUpsertWithWhereUniqueWithoutFirst_userInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutFirst_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutFirst_userNestedInput", {})
export class FriendshipUpdateManyWithoutFirst_userNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFirst_userInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFirst_userInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutFirst_userInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFirst_userInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFirst_userInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutFirst_userInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutFirst_userInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
