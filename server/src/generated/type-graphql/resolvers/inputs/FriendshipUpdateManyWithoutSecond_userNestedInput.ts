import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySecond_userInputEnvelope } from "../inputs/FriendshipCreateManySecond_userInputEnvelope";
import { FriendshipCreateOrConnectWithoutSecond_userInput } from "../inputs/FriendshipCreateOrConnectWithoutSecond_userInput";
import { FriendshipCreateWithoutSecond_userInput } from "../inputs/FriendshipCreateWithoutSecond_userInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutSecond_userInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutSecond_userInput";
import { FriendshipUpdateWithWhereUniqueWithoutSecond_userInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutSecond_userInput";
import { FriendshipUpsertWithWhereUniqueWithoutSecond_userInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutSecond_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutSecond_userNestedInput", {})
export class FriendshipUpdateManyWithoutSecond_userNestedInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutSecond_userInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutSecond_userInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutSecond_userInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManySecond_userInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManySecond_userInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutSecond_userInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutSecond_userInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}
