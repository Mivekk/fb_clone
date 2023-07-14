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
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n    }\n    accessToken\n    error\n  }\n}": types.LoginDocument,
    "query Me {\n  me {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n}": types.MeDocument,
    "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    createdAt\n    updatedAt\n    author {\n      id\n      firstName\n      lastName\n      email\n    }\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}": types.PostsDocument,
    "subscription UdpatePost {\n  udpatePost {\n    id\n    authorId\n    title\n    body\n    createdAt\n    updatedAt\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}": types.UdpatePostDocument,
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
export function graphql(source: "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n    }\n    accessToken\n    error\n  }\n}"): (typeof documents)["mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    user {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n    }\n    accessToken\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    createdAt\n    updatedAt\n    author {\n      id\n      firstName\n      lastName\n      email\n    }\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}"): (typeof documents)["query Posts($cursor: PostWhereUniqueInput, $take: Int, $skip: Int, $orderBy: [PostOrderByWithRelationInput!]) {\n  posts(cursor: $cursor, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    body\n    createdAt\n    updatedAt\n    author {\n      id\n      firstName\n      lastName\n      email\n    }\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription UdpatePost {\n  udpatePost {\n    id\n    authorId\n    title\n    body\n    createdAt\n    updatedAt\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}"): (typeof documents)["subscription UdpatePost {\n  udpatePost {\n    id\n    authorId\n    title\n    body\n    createdAt\n    updatedAt\n    comments {\n      id\n      authorId\n      postId\n      body\n      author {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;