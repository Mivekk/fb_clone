import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFirst_userInputEnvelope } from "../inputs/FriendshipCreateManyFirst_userInputEnvelope";
import { FriendshipCreateOrConnectWithoutFirst_userInput } from "../inputs/FriendshipCreateOrConnectWithoutFirst_userInput";
import { FriendshipCreateWithoutFirst_userInput } from "../inputs/FriendshipCreateWithoutFirst_userInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutFirst_userInput", {})
export class FriendshipCreateNestedManyWithoutFirst_userInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFirst_userInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFirst_userInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFirst_userInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFirst_userInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFirst_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}
