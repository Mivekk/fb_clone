import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySecond_userInputEnvelope } from "../inputs/FriendshipCreateManySecond_userInputEnvelope";
import { FriendshipCreateOrConnectWithoutSecond_userInput } from "../inputs/FriendshipCreateOrConnectWithoutSecond_userInput";
import { FriendshipCreateWithoutSecond_userInput } from "../inputs/FriendshipCreateWithoutSecond_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutSecond_userInput", {})
export class FriendshipCreateNestedManyWithoutSecond_userInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutSecond_userInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutSecond_userInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutSecond_userInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManySecond_userInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManySecond_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
