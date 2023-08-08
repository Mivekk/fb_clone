import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyPostInput } from "../inputs/ReactionCreateManyPostInput";

@TypeGraphQL.InputType("ReactionCreateManyPostInputEnvelope", {})
export class ReactionCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionCreateManyPostInput], {
    nullable: false
  })
  data!: ReactionCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
