/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type AddCommentInput = {
  body: Scalars['String']['input'];
  postId: Scalars['Float']['input'];
};

export type AddCommentResponseObject = {
  __typename?: 'AddCommentResponseObject';
  comment?: Maybe<Comment>;
  error?: Maybe<Scalars['String']['output']>;
};

export type AddReactionInput = {
  postId: Scalars['Float']['input'];
  type: ReactionType;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregateReaction = {
  __typename?: 'AggregateReaction';
  _avg?: Maybe<ReactionAvgAggregate>;
  _count?: Maybe<ReactionCountAggregate>;
  _max?: Maybe<ReactionMaxAggregate>;
  _min?: Maybe<ReactionMinAggregate>;
  _sum?: Maybe<ReactionSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type Comment = {
  __typename?: 'Comment';
  _count?: Maybe<CommentCount>;
  author: User;
  authorId: Scalars['Int']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  reactions: Array<Reaction>;
  replies: Array<Comment>;
  reply?: Maybe<Comment>;
  replyId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CommentReactionsArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type CommentRepliesArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type CommentReplyArgs = {
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
  replyId?: Maybe<Scalars['Float']['output']>;
};

export type CommentAvgOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
};

export type CommentCount = {
  __typename?: 'CommentCount';
  reactions: Scalars['Int']['output'];
  replies: Scalars['Int']['output'];
};


export type CommentCountReactionsArgs = {
  where?: InputMaybe<ReactionWhereInput>;
};


export type CommentCountRepliesArgs = {
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  authorId: Scalars['Int']['output'];
  body: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  replyId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CommentCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutCommentsInput;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutCommentInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutReplyInput>;
  reply?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
};

export type CommentCreateManyAuthorInput = {
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  replyId?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data: Array<CommentCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyInput = {
  authorId: Scalars['Int']['input'];
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  replyId?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentCreateManyPostInput = {
  authorId: Scalars['Int']['input'];
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  replyId?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyReplyInput = {
  authorId: Scalars['Int']['input'];
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
};

export type CommentCreateManyReplyInputEnvelope = {
  data: Array<CommentCreateManyReplyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateNestedManyWithoutReplyInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReplyInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReplyInput>>;
  createMany?: InputMaybe<CommentCreateManyReplyInputEnvelope>;
};

export type CommentCreateNestedOneWithoutReactionsInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<CommentCreateWithoutReactionsInput>;
};

export type CommentCreateNestedOneWithoutRepliesInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<CommentCreateWithoutRepliesInput>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutReactionsInput = {
  create: CommentCreateWithoutReactionsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutRepliesInput = {
  create: CommentCreateWithoutRepliesInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutReplyInput = {
  create: CommentCreateWithoutReplyInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  body: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutCommentsInput;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutCommentInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutReplyInput>;
  reply?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
};

export type CommentCreateWithoutPostInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String']['input'];
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutCommentInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutReplyInput>;
  reply?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
};

export type CommentCreateWithoutReactionsInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutCommentsInput;
  replies?: InputMaybe<CommentCreateNestedManyWithoutReplyInput>;
  reply?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
};

export type CommentCreateWithoutRepliesInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutCommentsInput;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutCommentInput>;
  reply?: InputMaybe<CommentCreateNestedOneWithoutRepliesInput>;
};

export type CommentCreateWithoutReplyInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutCommentsInput;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutCommentInput>;
  replies?: InputMaybe<CommentCreateNestedManyWithoutReplyInput>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
  authorId: Scalars['Int']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  replyId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  replyId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  replyId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
};

export type CommentNullableRelationFilter = {
  is?: InputMaybe<CommentWhereInput>;
  isNot?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrderInput>;
};

export type CommentOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  reactions?: InputMaybe<ReactionOrderByRelationAggregateInput>;
  replies?: InputMaybe<CommentOrderByRelationAggregateInput>;
  reply?: InputMaybe<CommentOrderByWithRelationInput>;
  replyId?: InputMaybe<SortOrderInput>;
};

export enum CommentScalarFieldEnum {
  AuthorId = 'authorId',
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  ReplyId = 'replyId',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  replyId?: InputMaybe<IntNullableFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<IntWithAggregatesFilter>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  replyId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  replyId?: Maybe<Scalars['Int']['output']>;
};

export type CommentSumOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
};

export type CommentUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutCommentNestedInput>;
  replies?: InputMaybe<CommentUpdateManyWithoutReplyNestedInput>;
  reply?: InputMaybe<CommentUpdateOneWithoutRepliesNestedInput>;
};

export type CommentUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutReplyInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithoutReplyNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReplyInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReplyInput>>;
  createMany?: InputMaybe<CommentCreateManyReplyInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutReplyInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutReplyInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutReplyInput>>;
};

export type CommentUpdateOneWithoutReactionsNestedInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<CommentCreateWithoutReactionsInput>;
  delete?: InputMaybe<CommentWhereInput>;
  disconnect?: InputMaybe<CommentWhereInput>;
  update?: InputMaybe<CommentUpdateToOneWithWhereWithoutReactionsInput>;
  upsert?: InputMaybe<CommentUpsertWithoutReactionsInput>;
};

export type CommentUpdateOneWithoutRepliesNestedInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<CommentCreateWithoutRepliesInput>;
  delete?: InputMaybe<CommentWhereInput>;
  disconnect?: InputMaybe<CommentWhereInput>;
  update?: InputMaybe<CommentUpdateToOneWithWhereWithoutRepliesInput>;
  upsert?: InputMaybe<CommentUpsertWithoutRepliesInput>;
};

export type CommentUpdateToOneWithWhereWithoutReactionsInput = {
  data: CommentUpdateWithoutReactionsInput;
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
  data: CommentUpdateWithoutRepliesInput;
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutReplyInput = {
  data: CommentUpdateWithoutReplyInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutCommentNestedInput>;
  replies?: InputMaybe<CommentUpdateManyWithoutReplyNestedInput>;
  reply?: InputMaybe<CommentUpdateOneWithoutRepliesNestedInput>;
};

export type CommentUpdateWithoutPostInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutCommentNestedInput>;
  replies?: InputMaybe<CommentUpdateManyWithoutReplyNestedInput>;
  reply?: InputMaybe<CommentUpdateOneWithoutRepliesNestedInput>;
};

export type CommentUpdateWithoutReactionsInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  replies?: InputMaybe<CommentUpdateManyWithoutReplyNestedInput>;
  reply?: InputMaybe<CommentUpdateOneWithoutRepliesNestedInput>;
};

export type CommentUpdateWithoutRepliesInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutCommentNestedInput>;
  reply?: InputMaybe<CommentUpdateOneWithoutRepliesNestedInput>;
};

export type CommentUpdateWithoutReplyInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutCommentNestedInput>;
  replies?: InputMaybe<CommentUpdateManyWithoutReplyNestedInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutReplyInput = {
  create: CommentCreateWithoutReplyInput;
  update: CommentUpdateWithoutReplyInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutReactionsInput = {
  create: CommentCreateWithoutReactionsInput;
  update: CommentUpdateWithoutReactionsInput;
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentUpsertWithoutRepliesInput = {
  create: CommentCreateWithoutRepliesInput;
  update: CommentUpdateWithoutRepliesInput;
  where?: InputMaybe<CommentWhereInput>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  replies?: InputMaybe<CommentListRelationFilter>;
  reply?: InputMaybe<CommentNullableRelationFilter>;
  replyId?: InputMaybe<IntNullableFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  replies?: InputMaybe<CommentListRelationFilter>;
  reply?: InputMaybe<CommentNullableRelationFilter>;
  replyId?: InputMaybe<IntNullableFilter>;
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePostResponseObject = {
  __typename?: 'CreatePostResponseObject';
  error?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type EnumReactionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ReactionType>;
};

export type EnumReactionTypeFilter = {
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type EnumReactionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumReactionTypeFilter>;
  _min?: InputMaybe<NestedEnumReactionTypeFilter>;
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponseObject = {
  __typename?: 'LoginResponseObject';
  accessToken?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: AddCommentResponseObject;
  createManyComment: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyReaction: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneComment: Comment;
  createOnePost: Post;
  createOneReaction: Reaction;
  createOneUser: User;
  createPost: CreatePostResponseObject;
  deleteComment: Scalars['Boolean']['output'];
  deleteManyComment: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyReaction: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneComment?: Maybe<Comment>;
  deleteOnePost?: Maybe<Post>;
  deleteOneReaction?: Maybe<Reaction>;
  deleteOneUser?: Maybe<User>;
  deletePost: Scalars['Boolean']['output'];
  login: LoginResponseObject;
  react: Reaction;
  register: RegisterResponseObject;
  revokeRefreshToken: Scalars['Boolean']['output'];
  updateManyComment: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyReaction: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneComment?: Maybe<Comment>;
  updateOnePost?: Maybe<Post>;
  updateOneReaction?: Maybe<Reaction>;
  updateOneUser?: Maybe<User>;
  upsertOneComment: Comment;
  upsertOnePost: Post;
  upsertOneReaction: Reaction;
  upsertOneUser: User;
};


export type MutationAddCommentArgs = {
  data: AddCommentInput;
};


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReactionArgs = {
  data: Array<ReactionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneReactionArgs = {
  data: ReactionCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['Float']['input'];
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyReactionArgs = {
  where?: InputMaybe<ReactionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneReactionArgs = {
  where: ReactionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationReactArgs = {
  data: AddReactionInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRevokeRefreshTokenArgs = {
  userId: Scalars['Float']['input'];
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyReactionArgs = {
  data: ReactionUpdateManyMutationInput;
  where?: InputMaybe<ReactionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneReactionArgs = {
  data: ReactionUpdateInput;
  where: ReactionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneReactionArgs = {
  create: ReactionCreateInput;
  update: ReactionUpdateInput;
  where: ReactionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedEnumReactionTypeFilter = {
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type NestedEnumReactionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumReactionTypeFilter>;
  _min?: InputMaybe<NestedEnumReactionTypeFilter>;
  equals?: InputMaybe<ReactionType>;
  in?: InputMaybe<Array<ReactionType>>;
  not?: InputMaybe<NestedEnumReactionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ReactionType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  author: User;
  authorId: Scalars['Int']['output'];
  body: Scalars['String']['output'];
  comments: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  reactions: Array<Reaction>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type PostCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type PostReactionsArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type PostAvgOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostCount = {
  __typename?: 'PostCount';
  comments: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
};


export type PostCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type PostCountReactionsArgs = {
  where?: InputMaybe<ReactionWhereInput>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int']['output'];
  authorId: Scalars['Int']['output'];
  body: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PostCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  author: UserCreateNestedOneWithoutPostsInput;
  body: Scalars['String']['input'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
};

export type PostCreateManyAuthorInput = {
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyInput = {
  authorId: Scalars['Int']['input'];
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateNestedOneWithoutReactionsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<PostCreateWithoutReactionsInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutReactionsInput = {
  create: PostCreateWithoutReactionsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  body: Scalars['String']['input'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
};

export type PostCreateWithoutCommentsInput = {
  author: UserCreateNestedOneWithoutPostsInput;
  body: Scalars['String']['input'];
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
};

export type PostCreateWithoutReactionsInput = {
  author: UserCreateNestedOneWithoutPostsInput;
  body: Scalars['String']['input'];
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  title: Scalars['String']['input'];
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  authorId: Scalars['Int']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  reactions?: InputMaybe<ReactionOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<IntWithAggregatesFilter>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PostSumOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateOneRequiredWithoutReactionsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<PostCreateWithoutReactionsInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutReactionsInput>;
  upsert?: InputMaybe<PostUpsertWithoutReactionsInput>;
};

export type PostUpdateToOneWithWhereWithoutCommentsInput = {
  data: PostUpdateWithoutCommentsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateToOneWithWhereWithoutReactionsInput = {
  data: PostUpdateWithoutReactionsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutReactionsInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpsertWithoutReactionsInput = {
  create: PostCreateWithoutReactionsInput;
  update: PostUpdateWithoutReactionsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregateComment: AggregateComment;
  aggregatePost: AggregatePost;
  aggregateReaction: AggregateReaction;
  aggregateUser: AggregateUser;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  findFirstComment?: Maybe<Comment>;
  findFirstCommentOrThrow?: Maybe<Comment>;
  findFirstPost?: Maybe<Post>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstReaction?: Maybe<Reaction>;
  findFirstReactionOrThrow?: Maybe<Reaction>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getComment?: Maybe<Comment>;
  getPost?: Maybe<Post>;
  getReaction?: Maybe<Reaction>;
  getUser?: Maybe<User>;
  groupByComment: Array<CommentGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByReaction: Array<ReactionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  reaction?: Maybe<Reaction>;
  reactions: Array<Reaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregateReactionArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstCommentOrThrowArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPostOrThrowArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstReactionArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryFindFirstReactionOrThrowArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryGetPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGetReactionArgs = {
  where: ReactionWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having?: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupByReactionArgs = {
  by: Array<ReactionScalarFieldEnum>;
  having?: InputMaybe<ReactionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryReactionArgs = {
  where: ReactionWhereUniqueInput;
};


export type QueryReactionsArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Reaction = {
  __typename?: 'Reaction';
  author: User;
  authorId: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  type: ReactionType;
  updatedAt: Scalars['DateTime']['output'];
};


export type ReactionCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};

export type ReactionAvgAggregate = {
  __typename?: 'ReactionAvgAggregate';
  authorId?: Maybe<Scalars['Float']['output']>;
  commentId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type ReactionAvgOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type ReactionCountAggregate = {
  __typename?: 'ReactionCountAggregate';
  _all: Scalars['Int']['output'];
  authorId: Scalars['Int']['output'];
  commentId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ReactionCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ReactionCreateInput = {
  author: UserCreateNestedOneWithoutReactionsInput;
  comment?: InputMaybe<CommentCreateNestedOneWithoutReactionsInput>;
  post: PostCreateNestedOneWithoutReactionsInput;
  type: ReactionType;
};

export type ReactionCreateManyAuthorInput = {
  commentId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  type: ReactionType;
};

export type ReactionCreateManyAuthorInputEnvelope = {
  data: Array<ReactionCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReactionCreateManyCommentInput = {
  authorId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  type: ReactionType;
};

export type ReactionCreateManyCommentInputEnvelope = {
  data: Array<ReactionCreateManyCommentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReactionCreateManyInput = {
  authorId: Scalars['Int']['input'];
  commentId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  type: ReactionType;
};

export type ReactionCreateManyPostInput = {
  authorId: Scalars['Int']['input'];
  commentId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  type: ReactionType;
};

export type ReactionCreateManyPostInputEnvelope = {
  data: Array<ReactionCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReactionCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ReactionCreateManyAuthorInputEnvelope>;
};

export type ReactionCreateNestedManyWithoutCommentInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutCommentInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutCommentInput>>;
  createMany?: InputMaybe<ReactionCreateManyCommentInputEnvelope>;
};

export type ReactionCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutPostInput>>;
  createMany?: InputMaybe<ReactionCreateManyPostInputEnvelope>;
};

export type ReactionCreateOrConnectWithoutAuthorInput = {
  create: ReactionCreateWithoutAuthorInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateOrConnectWithoutCommentInput = {
  create: ReactionCreateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateOrConnectWithoutPostInput = {
  create: ReactionCreateWithoutPostInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateWithoutAuthorInput = {
  comment?: InputMaybe<CommentCreateNestedOneWithoutReactionsInput>;
  post: PostCreateNestedOneWithoutReactionsInput;
  type: ReactionType;
};

export type ReactionCreateWithoutCommentInput = {
  author: UserCreateNestedOneWithoutReactionsInput;
  post: PostCreateNestedOneWithoutReactionsInput;
  type: ReactionType;
};

export type ReactionCreateWithoutPostInput = {
  author: UserCreateNestedOneWithoutReactionsInput;
  comment?: InputMaybe<CommentCreateNestedOneWithoutReactionsInput>;
  type: ReactionType;
};

export type ReactionGroupBy = {
  __typename?: 'ReactionGroupBy';
  _avg?: Maybe<ReactionAvgAggregate>;
  _count?: Maybe<ReactionCountAggregate>;
  _max?: Maybe<ReactionMaxAggregate>;
  _min?: Maybe<ReactionMinAggregate>;
  _sum?: Maybe<ReactionSumAggregate>;
  authorId: Scalars['Int']['output'];
  commentId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  type: ReactionType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReactionListRelationFilter = {
  every?: InputMaybe<ReactionWhereInput>;
  none?: InputMaybe<ReactionWhereInput>;
  some?: InputMaybe<ReactionWhereInput>;
};

export type ReactionMaxAggregate = {
  __typename?: 'ReactionMaxAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  commentId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ReactionType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReactionMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ReactionMinAggregate = {
  __typename?: 'ReactionMinAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  commentId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ReactionType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReactionMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ReactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReactionOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReactionAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReactionCountOrderByAggregateInput>;
  _max?: InputMaybe<ReactionMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReactionMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReactionSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ReactionOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  comment?: InputMaybe<CommentOrderByWithRelationInput>;
  commentId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum ReactionScalarFieldEnum {
  AuthorId = 'authorId',
  CommentId = 'commentId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ReactionScalarWhereInput = {
  AND?: InputMaybe<Array<ReactionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReactionScalarWhereInput>>;
  OR?: InputMaybe<Array<ReactionScalarWhereInput>>;
  authorId?: InputMaybe<IntFilter>;
  commentId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumReactionTypeFilter>;
};

export type ReactionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReactionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReactionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReactionScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<IntWithAggregatesFilter>;
  commentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumReactionTypeWithAggregatesFilter>;
};

export type ReactionSumAggregate = {
  __typename?: 'ReactionSumAggregate';
  authorId?: Maybe<Scalars['Int']['output']>;
  commentId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type ReactionSumOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  commentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export enum ReactionType {
  Dislike = 'DISLIKE',
  Like = 'LIKE'
}

export type ReactionUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutReactionsNestedInput>;
  comment?: InputMaybe<CommentUpdateOneWithoutReactionsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutReactionsNestedInput>;
  type?: InputMaybe<EnumReactionTypeFieldUpdateOperationsInput>;
};

export type ReactionUpdateManyMutationInput = {
  type?: InputMaybe<EnumReactionTypeFieldUpdateOperationsInput>;
};

export type ReactionUpdateManyWithWhereWithoutAuthorInput = {
  data: ReactionUpdateManyMutationInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateManyWithWhereWithoutCommentInput = {
  data: ReactionUpdateManyMutationInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateManyWithWhereWithoutPostInput = {
  data: ReactionUpdateManyMutationInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ReactionCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  set?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  update?: InputMaybe<Array<ReactionUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<ReactionUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<ReactionUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type ReactionUpdateManyWithoutCommentNestedInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutCommentInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutCommentInput>>;
  createMany?: InputMaybe<ReactionCreateManyCommentInputEnvelope>;
  delete?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  set?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  update?: InputMaybe<Array<ReactionUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: InputMaybe<Array<ReactionUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: InputMaybe<Array<ReactionUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ReactionUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReactionCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ReactionCreateWithoutPostInput>>;
  createMany?: InputMaybe<ReactionCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  set?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  update?: InputMaybe<Array<ReactionUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<ReactionUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<ReactionUpsertWithWhereUniqueWithoutPostInput>>;
};

export type ReactionUpdateWithWhereUniqueWithoutAuthorInput = {
  data: ReactionUpdateWithoutAuthorInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateWithWhereUniqueWithoutCommentInput = {
  data: ReactionUpdateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateWithWhereUniqueWithoutPostInput = {
  data: ReactionUpdateWithoutPostInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateWithoutAuthorInput = {
  comment?: InputMaybe<CommentUpdateOneWithoutReactionsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutReactionsNestedInput>;
  type?: InputMaybe<EnumReactionTypeFieldUpdateOperationsInput>;
};

export type ReactionUpdateWithoutCommentInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutReactionsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutReactionsNestedInput>;
  type?: InputMaybe<EnumReactionTypeFieldUpdateOperationsInput>;
};

export type ReactionUpdateWithoutPostInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutReactionsNestedInput>;
  comment?: InputMaybe<CommentUpdateOneWithoutReactionsNestedInput>;
  type?: InputMaybe<EnumReactionTypeFieldUpdateOperationsInput>;
};

export type ReactionUpsertWithWhereUniqueWithoutAuthorInput = {
  create: ReactionCreateWithoutAuthorInput;
  update: ReactionUpdateWithoutAuthorInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutCommentInput = {
  create: ReactionCreateWithoutCommentInput;
  update: ReactionUpdateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutPostInput = {
  create: ReactionCreateWithoutPostInput;
  update: ReactionUpdateWithoutPostInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionWhereInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  NOT?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  comment?: InputMaybe<CommentNullableRelationFilter>;
  commentId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumReactionTypeFilter>;
};

export type ReactionWhereUniqueInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  NOT?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  comment?: InputMaybe<CommentNullableRelationFilter>;
  commentId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumReactionTypeFilter>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponseObject = {
  __typename?: 'RegisterResponseObject';
  error?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  udpatePost?: Maybe<Post>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  posts: Array<Post>;
  reactions: Array<Reaction>;
  tokenVersion: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type UserCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type UserReactionsArgs = {
  cursor?: InputMaybe<ReactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReactionWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  tokenVersion?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  comments: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
};


export type UserCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type UserCountPostsArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type UserCountReactionsArgs = {
  where?: InputMaybe<ReactionWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  tokenVersion: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutAuthorInput>;
  tokenVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  tokenVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateNestedOneWithoutReactionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<UserCreateWithoutReactionsInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReactionsInput = {
  create: UserCreateWithoutReactionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutAuthorInput>;
  tokenVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCreateWithoutPostsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  reactions?: InputMaybe<ReactionCreateNestedManyWithoutAuthorInput>;
  tokenVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCreateWithoutReactionsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  tokenVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  tokenVersion: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  tokenVersion?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  tokenVersion?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  reactions?: InputMaybe<ReactionOrderByRelationAggregateInput>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  TokenVersion = 'tokenVersion',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  tokenVersion?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  tokenVersion?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tokenVersion?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutAuthorNestedInput>;
  tokenVersion?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReactionsInput>;
  create?: InputMaybe<UserCreateWithoutReactionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReactionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReactionsInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutPostsInput = {
  data: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReactionsInput = {
  data: UserUpdateWithoutReactionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutCommentsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutAuthorNestedInput>;
  tokenVersion?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<ReactionUpdateManyWithoutAuthorNestedInput>;
  tokenVersion?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReactionsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  tokenVersion?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReactionsInput = {
  create: UserCreateWithoutReactionsInput;
  update: UserUpdateWithoutReactionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  tokenVersion?: InputMaybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  reactions?: InputMaybe<ReactionListRelationFilter>;
  tokenVersion?: InputMaybe<IntFilter>;
};

export type UserFieldsFragment = { __typename?: 'User', id: number, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponseObject', accessToken?: string | null, error?: string | null, user?: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) | null } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponseObject', error?: string | null, user?: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
  ) | null };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;