import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFriendStatusFieldUpdateOperationsInput } from "../inputs/EnumFriendStatusFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput";

@TypeGraphQL.InputType("FriendshipUpdateWithoutSenderInput", {})
export class FriendshipUpdateWithoutSenderInput {
  @TypeGraphQL.Field(_type => EnumFriendStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumFriendStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput, {
    nullable: true
  })
  receiver?: UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput | undefined;
}
