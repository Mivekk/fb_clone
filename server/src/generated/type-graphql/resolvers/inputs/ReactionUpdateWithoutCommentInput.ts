import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionTypeFieldUpdateOperationsInput } from "../inputs/EnumReactionTypeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutReactionsNestedInput";
import { UserUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutCommentInput", {})
export class ReactionUpdateWithoutCommentInput {
  @TypeGraphQL.Field(_type => EnumReactionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumReactionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutReactionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutReactionsNestedInput | undefined;
}
