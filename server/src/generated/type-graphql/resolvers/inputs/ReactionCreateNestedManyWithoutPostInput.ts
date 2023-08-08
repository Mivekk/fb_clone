import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyPostInputEnvelope } from "../inputs/ReactionCreateManyPostInputEnvelope";
import { ReactionCreateOrConnectWithoutPostInput } from "../inputs/ReactionCreateOrConnectWithoutPostInput";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateNestedManyWithoutPostInput", {})
export class ReactionCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutPostInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionWhereUniqueInput[] | undefined;
}
