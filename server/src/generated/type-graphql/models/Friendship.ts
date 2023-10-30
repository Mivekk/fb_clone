import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { FriendStatus } from "../enums/FriendStatus";

@TypeGraphQL.ObjectType("Friendship", {
  simpleResolvers: true
})
export class Friendship {
  first_user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_user_id!: number;

  second_user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_user_id!: number;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: false
  })
  status!: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS";
}
