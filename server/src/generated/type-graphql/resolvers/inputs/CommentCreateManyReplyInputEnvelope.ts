import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReplyInput } from "../inputs/CommentCreateManyReplyInput";

@TypeGraphQL.InputType("CommentCreateManyReplyInputEnvelope", {})
export class CommentCreateManyReplyInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyReplyInput], {
    nullable: false
  })
  data!: CommentCreateManyReplyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
