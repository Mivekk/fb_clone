import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPrisma_friendsInput } from "../inputs/UserCreateWithoutPrisma_friendsInput";
import { UserUpdateWithoutPrisma_friendsInput } from "../inputs/UserUpdateWithoutPrisma_friendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutPrisma_friendsInput", {})
export class UserUpsertWithWhereUniqueWithoutPrisma_friendsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPrisma_friendsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPrisma_friendsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPrisma_friendsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPrisma_friendsInput;
}
