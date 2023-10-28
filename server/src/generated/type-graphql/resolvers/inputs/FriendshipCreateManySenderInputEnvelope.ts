import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySenderInput } from "../inputs/FriendshipCreateManySenderInput";

@TypeGraphQL.InputType("FriendshipCreateManySenderInputEnvelope", {})
export class FriendshipCreateManySenderInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManySenderInput], {
    nullable: false
  })
  data!: FriendshipCreateManySenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
