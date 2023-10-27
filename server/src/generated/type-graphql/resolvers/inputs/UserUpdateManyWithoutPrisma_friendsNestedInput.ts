import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPrisma_friendsInput } from "../inputs/UserCreateOrConnectWithoutPrisma_friendsInput";
import { UserCreateWithoutPrisma_friendsInput } from "../inputs/UserCreateWithoutPrisma_friendsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutPrisma_friendsInput } from "../inputs/UserUpdateManyWithWhereWithoutPrisma_friendsInput";
import { UserUpdateWithWhereUniqueWithoutPrisma_friendsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutPrisma_friendsInput";
import { UserUpsertWithWhereUniqueWithoutPrisma_friendsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutPrisma_friendsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutPrisma_friendsNestedInput", {})
export class UserUpdateManyWithoutPrisma_friendsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPrisma_friendsInput], {
    nullable: true
  })
  create?: UserCreateWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPrisma_friendsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutPrisma_friendsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutPrisma_friendsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutPrisma_friendsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutPrisma_friendsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
