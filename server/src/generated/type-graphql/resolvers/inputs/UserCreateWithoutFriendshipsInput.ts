import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { FriendshipCreateNestedManyWithoutSecond_userInput } from "../inputs/FriendshipCreateNestedManyWithoutSecond_userInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ReactionCreateNestedManyWithoutAuthorInput } from "../inputs/ReactionCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutFriendshipsInput", {})
export class UserCreateWithoutFriendshipsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image_url?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tokenVersion?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  reactions?: ReactionCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateNestedManyWithoutSecond_userInput, {
    nullable: true
  })
  prisma_friendships?: FriendshipCreateNestedManyWithoutSecond_userInput | undefined;
}
