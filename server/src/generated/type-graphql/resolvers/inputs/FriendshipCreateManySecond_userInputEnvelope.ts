import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManySecond_userInput } from "../inputs/FriendshipCreateManySecond_userInput";

@TypeGraphQL.InputType("FriendshipCreateManySecond_userInputEnvelope", {})
export class FriendshipCreateManySecond_userInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManySecond_userInput], {
    nullable: false
  })
  data!: FriendshipCreateManySecond_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
