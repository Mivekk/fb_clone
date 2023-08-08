import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutAuthorInput", {})
export class ReactionUpdateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutReactionsNestedInput | undefined;
}
