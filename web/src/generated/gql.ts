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
    "fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  createdAt\n  updatedAt\n}": types.UserFieldsFragmentDoc,
    "mutation AddComment($data: AddCommentInput!) {\n  addComment(data: $data) {\n    comment {\n      id\n    }\n    error\n  }\n}": types.AddCommentDocument,
    "mutation AddReaction($data: AddReactionInput!) {\n  addReaction(data: $data) {\n    id\n  }\n}": types.AddReactionDocument,
    "mutation CreatePost($data: CreatePostInput!) {\n  createPost(data: $data) {\n    post {\n      id\n      title\n      body\n      author {\n        id\n        firstName\n        lastName\n      }\n      createdAt\n      updatedAt\n    }\n    error\n  }\n}": types.CreatePostDocument,
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n    }\n    accessToken\n    error\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      id\n    }\n    error\n  }\n}": types.RegisterDocument,
    "query Comments($where: CommentWhereInput) {\n  comments(where: $where) {\n    id\n    postId\n    replyId\n    body\n    author {\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}": types.CommentsDocument,
    "query Me {\n  me {\n    ...UserFields\n  }\n}": types.MeDocument,
    "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}": types.PostsDocument,
    "query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}": types.ReactionsDocument,
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
export function graphql(source: "fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  createdAt\n  updatedAt\n}"];
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
export function graphql(source: "query Comments($where: CommentWhereInput) {\n  comments(where: $where) {\n    id\n    postId\n    replyId\n    body\n    author {\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Comments($where: CommentWhereInput) {\n  comments(where: $where) {\n    id\n    postId\n    replyId\n    body\n    author {\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    ...UserFields\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...UserFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Reactions($where: ReactionWhereInput) {\n  reactions(where: $where) {\n    id\n    type\n    postId\n    commentId\n    author {\n      id\n      firstName\n      lastName\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription UdpatePost {\n  udpatePost {\n    id\n    comments {\n      ...CommentFields\n    }\n    reactions {\n      ...ReactionFields\n    }\n  }\n}"): (typeof documents)["subscription UdpatePost {\n  udpatePost {\n    id\n    comments {\n      ...CommentFields\n    }\n    reactions {\n      ...ReactionFields\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;