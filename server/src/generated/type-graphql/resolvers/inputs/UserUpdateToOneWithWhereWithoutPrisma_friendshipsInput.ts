import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPrisma_friendshipsInput } from "../inputs/UserUpdateWithoutPrisma_friendshipsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput", {})
export class UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPrisma_friendshipsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPrisma_friendshipsInput;
}
