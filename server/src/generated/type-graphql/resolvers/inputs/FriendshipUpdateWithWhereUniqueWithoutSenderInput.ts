import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutSenderInput } from "../inputs/FriendshipUpdateWithoutSenderInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutSenderInput", {})
export class FriendshipUpdateWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutSenderInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutSenderInput;
}
