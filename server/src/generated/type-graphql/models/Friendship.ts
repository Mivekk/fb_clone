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
  sender?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  receiver?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  receiverId!: number;

  @TypeGraphQL.Field(_type => FriendStatus, {
    nullable: false
  })
  status!: "INVITE_SENT" | "INVITE_RECEIVED" | "FRIENDS";
}
