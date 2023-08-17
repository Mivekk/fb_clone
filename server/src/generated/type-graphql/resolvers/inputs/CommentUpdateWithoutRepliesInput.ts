import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneWithoutRepliesNestedInput } from "../inputs/CommentUpdateOneWithoutRepliesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsNestedInput";
import { ReactionUpdateManyWithoutCommentNestedInput } from "../inputs/ReactionUpdateManyWithoutCommentNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateWithoutRepliesInput", {})
export class CommentUpdateWithoutRepliesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ReactionUpdateManyWithoutCommentNestedInput, {
    nullable: true
  })
  reactions?: ReactionUpdateManyWithoutCommentNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutRepliesNestedInput, {
    nullable: true
  })
  reply?: CommentUpdateOneWithoutRepliesNestedInput | undefined;
}
