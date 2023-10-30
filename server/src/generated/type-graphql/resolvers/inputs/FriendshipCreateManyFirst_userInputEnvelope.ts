import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFirst_userInput } from "../inputs/FriendshipCreateManyFirst_userInput";

@TypeGraphQL.InputType("FriendshipCreateManyFirst_userInputEnvelope", {})
export class FriendshipCreateManyFirst_userInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyFirst_userInput], {
    nullable: false
  })
  data!: FriendshipCreateManyFirst_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
