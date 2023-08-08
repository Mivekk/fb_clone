import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyAuthorInput } from "../inputs/ReactionCreateManyAuthorInput";

@TypeGraphQL.InputType("ReactionCreateManyAuthorInputEnvelope", {})
export class ReactionCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionCreateManyAuthorInput], {
    nullable: false
  })
  data!: ReactionCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
