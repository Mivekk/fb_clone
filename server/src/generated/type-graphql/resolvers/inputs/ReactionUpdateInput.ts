import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutReactionsNestedInput";
import { UserUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateInput", {})
export class ReactionUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutReactionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutReactionsNestedInput | undefined;
}
