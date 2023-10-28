import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Friendship } from "../models/Friendship";
import { Post } from "../models/Post";
import { Reaction } from "../models/Reaction";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  simpleResolvers: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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

  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image_url?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tokenVersion!: number;

  posts?: Post[];

  comments?: Comment[];

  reactions?: Reaction[];

  friendships?: Friendship[];

  prisma_friendships?: Friendship[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
