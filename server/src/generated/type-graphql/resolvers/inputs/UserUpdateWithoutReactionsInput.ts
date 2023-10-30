import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutAuthorNestedInput } from "../inputs/CommentUpdateManyWithoutAuthorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FriendshipUpdateManyWithoutFirst_userNestedInput } from "../inputs/FriendshipUpdateManyWithoutFirst_userNestedInput";
import { FriendshipUpdateManyWithoutSecond_userNestedInput } from "../inputs/FriendshipUpdateManyWithoutSecond_userNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutReactionsInput", {})
export class UserUpdateWithoutReactionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image_url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  tokenVersion?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  external_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  external_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutFirst_userNestedInput, {
    nullable: true
  })
  friendships?: FriendshipUpdateManyWithoutFirst_userNestedInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutSecond_userNestedInput, {
    nullable: true
  })
  prisma_friendships?: FriendshipUpdateManyWithoutSecond_userNestedInput | undefined;
}
