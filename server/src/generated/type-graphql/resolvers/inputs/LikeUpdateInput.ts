import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutLikesNestedInput";

@TypeGraphQL.InputType("LikeUpdateInput", {})
export class LikeUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
