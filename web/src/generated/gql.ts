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
    "fragment PostFields on Post {\n  id\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}": types.PostFieldsFragmentDoc,
    "fragment ReactionFields on Reaction {\n  id\n  postId\n  commentId\n  type\n  author {\n    ...UserFields\n  }\n  createdAt\n  updatedAt\n}": types.ReactionFieldsFragmentDoc,
    "fragment UserFields on User {\n  id\n  firstName\n  lastName\n  email\n  createdAt\n  updatedAt\n}": types.UserFieldsFragmentDoc,
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      ...UserFields\n    }\n    accessToken\n    error\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      ...UserFields\n    }\n    error\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    ...UserFields\n  }\n}": types.MeDocument,
    "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    ...PostFields\n  }\n}": types.PostsDocument,
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
export function graphql(source: "fragment PostFields on Post {\n  id\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment PostFields on Post {\n  id\n  title\n  body\n  author {\n    ...UserFields\n  }\n  comments {\n    ...CommentFields\n  }\n  reactions {\n    ...ReactionFields\n  }\n  createdAt\n  updatedAt\n}"];
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
export function graphql(source: "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      ...UserFields\n    }\n    accessToken\n    error\n  }\n}"): (typeof documents)["mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      ...UserFields\n    }\n    accessToken\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      ...UserFields\n    }\n    error\n  }\n}"): (typeof documents)["mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    user {\n      ...UserFields\n    }\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    ...UserFields\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...UserFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    ...PostFields\n  }\n}"): (typeof documents)["query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    ...PostFields\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;