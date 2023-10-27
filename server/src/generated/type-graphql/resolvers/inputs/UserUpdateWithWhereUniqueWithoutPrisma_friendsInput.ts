import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPrisma_friendsInput } from "../inputs/UserUpdateWithoutPrisma_friendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutPrisma_friendsInput", {})
export class UserUpdateWithWhereUniqueWithoutPrisma_friendsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPrisma_friendsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPrisma_friendsInput;
}
