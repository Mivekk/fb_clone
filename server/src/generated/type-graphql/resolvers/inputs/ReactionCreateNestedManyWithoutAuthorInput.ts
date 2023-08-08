import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyAuthorInputEnvelope } from "../inputs/ReactionCreateManyAuthorInputEnvelope";
import { ReactionCreateOrConnectWithoutAuthorInput } from "../inputs/ReactionCreateOrConnectWithoutAuthorInput";
import { ReactionCreateWithoutAuthorInput } from "../inputs/ReactionCreateWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";

@TypeGraphQL.InputType("ReactionCreateNestedManyWithoutAuthorInput", {})
export class ReactionCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ReactionCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ReactionCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionWhereUniqueInput[] | undefined;
}
