import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyReceiverInput } from "../inputs/FriendshipCreateManyReceiverInput";

@TypeGraphQL.InputType("FriendshipCreateManyReceiverInputEnvelope", {})
export class FriendshipCreateManyReceiverInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyReceiverInput], {
    nullable: false
  })
  data!: FriendshipCreateManyReceiverInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
