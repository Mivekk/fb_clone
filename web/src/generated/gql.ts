/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CommentFields on Comment {\n  id\n  postId\n  replyId\n  body\n  author {\n    ...UserFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  updatedAt\n  createdAt\n}": types.CommentFieldsFragmentDoc,
    "fragment PostFields on Post {\n  id\n  authorId\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}": types.PostFieldsFragmentDoc,
    "fragment ReactionFields on Reaction {\n  id\n  postId\n  commentId\n  type\n  author {\n    ...UserFields\n  }\n  createdAt\n  updatedAt\n}": types.ReactionFieldsFragmentDoc,
    "fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  image_url\n  createdAt\n  updatedAt\n}": types.UserFieldsFragmentDoc,
    "mutation AddComment($data: AddCommentInput!) {\n  addComment(data: $data) {\n    comment {\n      id\n    }\n    error\n  }\n}": types.AddCommentDocument,
    "mutation AddReaction($data: AddReactionInput!) {\n  addReaction(data: $data) {\n    id\n  }\n}": types.AddReactionDocument,
    "mutation CreatePost($data: CreatePostInput!) {\n  createPost(data: $data) {\n    post {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n      }\n      createdAt\n      updatedAt\n    }\n    error\n  }\n}": types.CreatePostDocument,
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n    }\n    accessToken\n    error\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      id\n    }\n    error\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    ...UserFields\n  }\n}": types.MeDocument,
    "query PaginatedComments($take: Float!, $where: CommentWhereInput, $cursor: Float) {\n  paginatedComments(take: $take, where: $where, cursor: $cursor) {\n    comments {\n      comment {\n        id\n        postId\n        replyId\n        body\n        author {\n          id\n          firstName\n          lastName\n          image_url\n        }\n        reactions {\n          ...ReactionFields\n        }\n        createdAt\n        updatedAt\n      }\n      hasReplies\n    }\n    hasMore\n  }\n}": types.PaginatedCommentsDocument,
    "query PaginatedPosts($take: Float!, $where: PostWhereInput, $cursor: Float) {\n  paginatedPosts(take: $take, where: $where, cursor: $cursor) {\n    posts {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n        image_url\n      }\n      createdAt\n      updatedAt\n    }\n    hasMore\n  }\n}": types.PaginatedPostsDocument,
    "query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}": types.ReactionsDocument,
    "query User($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    firstName\n    lastName\n    email\n    image_url\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n    reactions {\n      id\n    }\n    createdAt\n    updatedAt\n  }\n}": types.UserDocument,
    "subscription UdpatePost {\n  udpatePost {\n    id\n    comments {\n      ...CommentFields\n    }\n    reactions {\n      ...ReactionFields\n    }\n  }\n}": types.UdpatePostDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CommentFields on Comment {\n  id\n  postId\n  replyId\n  body\n  author {\n    ...UserFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  updatedAt\n  createdAt\n}"): (typeof documents)["fragment CommentFields on Comment {\n  id\n  postId\n  replyId\n  body\n  author {\n    ...UserFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  updatedAt\n  createdAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PostFields on Post {\n  id\n  authorId\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment PostFields on Post {\n  id\n  authorId\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReactionFields on Reaction {\n  id\n  postId\n  commentId\n  type\n  author {\n    ...UserFields\n  }\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment ReactionFields on Reaction {\n  id\n  postId\n  commentId\n  type\n  author {\n    ...UserFields\n  }\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  image_url\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  image_url\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddComment($data: AddCommentInput!) {\n  addComment(data: $data) {\n    comment {\n      id\n    }\n    error\n  }\n}"): (typeof documents)["mutation AddComment($data: AddCommentInput!) {\n  addComment(data: $data) {\n    comment {\n      id\n    }\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddReaction($data: AddReactionInput!) {\n  addReaction(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation AddReaction($data: AddReactionInput!) {\n  addReaction(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($data: CreatePostInput!) {\n  createPost(data: $data) {\n    post {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n      }\n      createdAt\n      updatedAt\n    }\n    error\n  }\n}"): (typeof documents)["mutation CreatePost($data: CreatePostInput!) {\n  createPost(data: $data) {\n    post {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n      }\n      createdAt\n      updatedAt\n    }\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n    }\n    accessToken\n    error\n  }\n}"): (typeof documents)["mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n    }\n    accessToken\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      id\n    }\n    error\n  }\n}"): (typeof documents)["mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      id\n    }\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    ...UserFields\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...UserFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PaginatedComments($take: Float!, $where: CommentWhereInput, $cursor: Float) {\n  paginatedComments(take: $take, where: $where, cursor: $cursor) {\n    comments {\n      comment {\n        id\n        postId\n        replyId\n        body\n        author {\n          id\n          firstName\n          lastName\n          image_url\n        }\n        reactions {\n          ...ReactionFields\n        }\n        createdAt\n        updatedAt\n      }\n      hasReplies\n    }\n    hasMore\n  }\n}"): (typeof documents)["query PaginatedComments($take: Float!, $where: CommentWhereInput, $cursor: Float) {\n  paginatedComments(take: $take, where: $where, cursor: $cursor) {\n    comments {\n      comment {\n        id\n        postId\n        replyId\n        body\n        author {\n          id\n          firstName\n          lastName\n          image_url\n        }\n        reactions {\n          ...ReactionFields\n        }\n        createdAt\n        updatedAt\n      }\n      hasReplies\n    }\n    hasMore\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PaginatedPosts($take: Float!, $where: PostWhereInput, $cursor: Float) {\n  paginatedPosts(take: $take, where: $where, cursor: $cursor) {\n    posts {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n        image_url\n      }\n      createdAt\n      updatedAt\n    }\n    hasMore\n  }\n}"): (typeof documents)["query PaginatedPosts($take: Float!, $where: PostWhereInput, $cursor: Float) {\n  paginatedPosts(take: $take, where: $where, cursor: $cursor) {\n    posts {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n        image_url\n      }\n      createdAt\n      updatedAt\n    }\n    hasMore\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query User($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    firstName\n    lastName\n    email\n    image_url\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n    reactions {\n      id\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query User($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    firstName\n    lastName\n    email\n    image_url\n    posts {\n      id\n    }\n    comments {\n      id\n    }\n    reactions {\n      id\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription UdpatePost {\n  udpatePost {\n    id\n    comments {\n      ...CommentFields\n    }\n    reactions {\n      ...ReactionFields\n    }\n  }\n}"): (typeof documents)["subscription UdpatePost {\n  udpatePost {\n    id\n    comments {\n      ...CommentFields\n    }\n    reactions {\n      ...ReactionFields\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;