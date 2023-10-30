import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFriendStatusFieldUpdateOperationsInput } from "../inputs/EnumFriendStatusFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFriendshipsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFriendshipsNestedInput";

@TypeGraphQL.InputType("FriendshipUpdateWithoutSecond_userInput", {})
export class FriendshipUpdateWithoutSecond_userInput {
  @TypeGraphQL.Field(_type => EnumFriendStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumFriendStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFriendshipsNestedInput, {
    nullable: true
  })
  first_user?: UserUpdateOneRequiredWithoutFriendshipsNestedInput | undefined;
}
