import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneWithoutReactionsNestedInput } from "../inputs/CommentUpdateOneWithoutReactionsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionTypeFieldUpdateOperationsInput } from "../inputs/EnumReactionTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReactionsNestedInput";

@TypeGraphQL.InputType("ReactionUpdateWithoutPostInput", {})
export class ReactionUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => EnumReactionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumReactionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutReactionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutReactionsNestedInput, {
    nullable: true
  })
  comment?: CommentUpdateOneWithoutReactionsNestedInput | undefined;
}
