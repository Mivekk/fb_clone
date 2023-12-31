import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendStatus } from "../../enums/FriendStatus";

@TypeGraphQL.ObjectType("FriendshipMinAggregate", {
  simpleResolvers: true
})
export class FriendshipMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  first_user_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  second_user_id!: number | null;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: true
  })
  status!: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS" | null;
}
