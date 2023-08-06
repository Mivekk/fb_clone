import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyPostInput } from "../inputs/LikeCreateManyPostInput";

@TypeGraphQL.InputType("LikeCreateManyPostInputEnvelope", {})
export class LikeCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [LikeCreateManyPostInput], {
    nullable: false
  })
  data!: LikeCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
