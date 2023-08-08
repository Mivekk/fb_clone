import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutPostInput", {})
export class ReactionUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutReactionsNestedInput | undefined;
}
