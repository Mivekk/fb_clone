import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPrisma_friendsInput } from "../inputs/UserCreateOrConnectWithoutPrisma_friendsInput";
import { UserCreateWithoutPrisma_friendsInput } from "../inputs/UserCreateWithoutPrisma_friendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutPrisma_friendsInput", {})
export class UserCreateNestedManyWithoutPrisma_friendsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPrisma_friendsInput], {
    nullable: true
  })
  create?: UserCreateWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPrisma_friendsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
