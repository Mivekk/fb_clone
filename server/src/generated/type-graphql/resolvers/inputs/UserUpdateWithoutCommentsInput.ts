import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FriendshipUpdateManyWithoutReceiverNestedInput } from "../inputs/FriendshipUpdateManyWithoutReceiverNestedInput";
import { FriendshipUpdateManyWithoutSenderNestedInput } from "../inputs/FriendshipUpdateManyWithoutSenderNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { ReactionUpdateManyWithoutAuthorNestedInput } from "../inputs/ReactionUpdateManyWithoutAuthorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
export class UserUpdateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  reactions?: ReactionUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutSenderNestedInput, {
    nullable: true
  })
  friendships?: FriendshipUpdateManyWithoutSenderNestedInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipUpdateManyWithoutReceiverNestedInput, {
    nullable: true
  })
  prisma_friendships?: FriendshipUpdateManyWithoutReceiverNestedInput | undefined;
}
