import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneWithoutReactionsNestedInput } from "../inputs/CommentUpdateOneWithoutReactionsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionTypeFieldUpdateOperationsInput } from "../inputs/EnumReactionTypeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutAuthorInput", {})
export class ReactionUpdateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => EnumReactionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumReactionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutReactionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutReactionsNestedInput, {
    nullable: true
  })
  comment?: CommentUpdateOneWithoutReactionsNestedInput | undefined;
}
