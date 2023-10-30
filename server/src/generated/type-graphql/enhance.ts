import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Friendship: crudResolvers.FriendshipCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Reaction: crudResolvers.ReactionCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Friendship: {
    aggregateFriendship: actionResolvers.AggregateFriendshipResolver,
    createManyFriendship: actionResolvers.CreateManyFriendshipResolver,
    createOneFriendship: actionResolvers.CreateOneFriendshipResolver,
    deleteManyFriendship: actionResolvers.DeleteManyFriendshipResolver,
    deleteOneFriendship: actionResolvers.DeleteOneFriendshipResolver,
    findFirstFriendship: actionResolvers.FindFirstFriendshipResolver,
    findFirstFriendshipOrThrow: actionResolvers.FindFirstFriendshipOrThrowResolver,
    friendships: actionResolvers.FindManyFriendshipResolver,
    friendship: actionResolvers.FindUniqueFriendshipResolver,
    getFriendship: actionResolvers.FindUniqueFriendshipOrThrowResolver,
    groupByFriendship: actionResolvers.GroupByFriendshipResolver,
    updateManyFriendship: actionResolvers.UpdateManyFriendshipResolver,
    updateOneFriendship: actionResolvers.UpdateOneFriendshipResolver,
    upsertOneFriendship: actionResolvers.UpsertOneFriendshipResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  Reaction: {
    aggregateReaction: actionResolvers.AggregateReactionResolver,
    createManyReaction: actionResolvers.CreateManyReactionResolver,
    createOneReaction: actionResolvers.CreateOneReactionResolver,
    deleteManyReaction: actionResolvers.DeleteManyReactionResolver,
    deleteOneReaction: actionResolvers.DeleteOneReactionResolver,
    findFirstReaction: actionResolvers.FindFirstReactionResolver,
    findFirstReactionOrThrow: actionResolvers.FindFirstReactionOrThrowResolver,
    reactions: actionResolvers.FindManyReactionResolver,
    reaction: actionResolvers.FindUniqueReactionResolver,
    getReaction: actionResolvers.FindUniqueReactionOrThrowResolver,
    groupByReaction: actionResolvers.GroupByReactionResolver,
    updateManyReaction: actionResolvers.UpdateManyReactionResolver,
    updateOneReaction: actionResolvers.UpdateOneReactionResolver,
    upsertOneReaction: actionResolvers.UpsertOneReactionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Friendship: ["aggregateFriendship", "createManyFriendship", "createOneFriendship", "deleteManyFriendship", "deleteOneFriendship", "findFirstFriendship", "findFirstFriendshipOrThrow", "friendships", "friendship", "getFriendship", "groupByFriendship", "updateManyFriendship", "updateOneFriendship", "upsertOneFriendship"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  Reaction: ["aggregateReaction", "createManyReaction", "createOneReaction", "deleteManyReaction", "deleteOneReaction", "findFirstReaction", "findFirstReactionOrThrow", "reactions", "reaction", "getReaction", "groupByReaction", "updateManyReaction", "updateOneReaction", "upsertOneReaction"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFriendshipArgs: ["data", "skipDuplicates"],
  CreateOneFriendshipArgs: ["data"],
  DeleteManyFriendshipArgs: ["where"],
  DeleteOneFriendshipArgs: ["where"],
  FindFirstFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFriendshipOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFriendshipArgs: ["where"],
  FindUniqueFriendshipOrThrowArgs: ["where"],
  GroupByFriendshipArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFriendshipArgs: ["data", "where"],
  UpdateOneFriendshipArgs: ["data", "where"],
  UpsertOneFriendshipArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  FindUniqueCommentOrThrowArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregateReactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyReactionArgs: ["data", "skipDuplicates"],
  CreateOneReactionArgs: ["data"],
  DeleteManyReactionArgs: ["where"],
  DeleteOneReactionArgs: ["where"],
  FindFirstReactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstReactionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueReactionArgs: ["where"],
  FindUniqueReactionOrThrowArgs: ["where"],
  GroupByReactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyReactionArgs: ["data", "where"],
  UpdateOneReactionArgs: ["data", "where"],
  UpsertOneReactionArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Friendship: relationResolvers.FriendshipRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Reaction: relationResolvers.ReactionRelationsResolver
};
const relationResolversInfo = {
  User: ["posts", "comments", "reactions", "friendships", "prisma_friendships"],
  Friendship: ["first_user", "second_user"],
  Post: ["author", "comments", "reactions"],
  Comment: ["author", "post", "reactions", "replies", "reply"],
  Reaction: ["author", "post", "comment"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "firstName", "lastName", "email", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  Friendship: ["first_user_id", "second_user_id", "status"],
  Post: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  Comment: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  Reaction: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFriendship: ["_count", "_avg", "_sum", "_min", "_max"],
  FriendshipGroupBy: ["first_user_id", "second_user_id", "status", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReaction: ["_count", "_avg", "_sum", "_min", "_max"],
  ReactionGroupBy: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserCountAggregate: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id", "tokenVersion"],
  UserSumAggregate: ["id", "tokenVersion"],
  UserMinAggregate: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  FriendshipCountAggregate: ["first_user_id", "second_user_id", "status", "_all"],
  FriendshipAvgAggregate: ["first_user_id", "second_user_id"],
  FriendshipSumAggregate: ["first_user_id", "second_user_id"],
  FriendshipMinAggregate: ["first_user_id", "second_user_id", "status"],
  FriendshipMaxAggregate: ["first_user_id", "second_user_id", "status"],
  PostCount: ["comments", "reactions"],
  PostCountAggregate: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "_all"],
  PostAvgAggregate: ["id", "authorId"],
  PostSumAggregate: ["id", "authorId"],
  PostMinAggregate: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  PostMaxAggregate: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  CommentCount: ["reactions", "replies"],
  CommentCountAggregate: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["id", "authorId", "postId", "replyId"],
  CommentSumAggregate: ["id", "authorId", "postId", "replyId"],
  CommentMinAggregate: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionCountAggregate: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "_all"],
  ReactionAvgAggregate: ["id", "authorId", "postId", "commentId"],
  ReactionSumAggregate: ["id", "authorId", "postId", "commentId"],
  ReactionMinAggregate: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  ReactionMaxAggregate: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserOrderByWithRelationInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "firstName", "lastName", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserOrderByWithAggregationInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  FriendshipWhereInput: ["AND", "OR", "NOT", "first_user_id", "second_user_id", "status", "first_user", "second_user"],
  FriendshipOrderByWithRelationInput: ["first_user_id", "second_user_id", "status", "first_user", "second_user"],
  FriendshipWhereUniqueInput: ["first_user_id_second_user_id", "AND", "OR", "NOT", "first_user_id", "second_user_id", "status", "first_user", "second_user"],
  FriendshipOrderByWithAggregationInput: ["first_user_id", "second_user_id", "status", "_count", "_avg", "_max", "_min", "_sum"],
  FriendshipScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "first_user_id", "second_user_id", "status"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostOrderByWithRelationInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostOrderByWithAggregationInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies", "reply"],
  CommentOrderByWithRelationInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies", "reply"],
  CommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies", "reply"],
  CommentOrderByWithAggregationInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionWhereInput: ["AND", "OR", "NOT", "id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "author", "post", "comment"],
  ReactionOrderByWithRelationInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "author", "post", "comment"],
  ReactionWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "author", "post", "comment"],
  ReactionOrderByWithAggregationInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ReactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  UserCreateInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserUpdateInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships", "prisma_friendships"],
  UserCreateManyInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  FriendshipCreateInput: ["status", "first_user", "second_user"],
  FriendshipUpdateInput: ["status", "first_user", "second_user"],
  FriendshipCreateManyInput: ["first_user_id", "second_user_id", "status"],
  FriendshipUpdateManyMutationInput: ["status"],
  PostCreateInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostUpdateInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostCreateManyInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  PostUpdateManyMutationInput: ["title", "body", "image_url", "createdAt", "updatedAt"],
  CommentCreateInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies", "reply"],
  CommentUpdateInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies", "reply"],
  CommentCreateManyInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["body", "image_url", "createdAt", "updatedAt"],
  ReactionCreateInput: ["type", "createdAt", "updatedAt", "author", "post", "comment"],
  ReactionUpdateInput: ["type", "createdAt", "updatedAt", "author", "post", "comment"],
  ReactionCreateManyInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  ReactionUpdateManyMutationInput: ["type", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  ReactionListRelationFilter: ["every", "some", "none"],
  FriendshipListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  PostOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  ReactionOrderByRelationAggregateInput: ["_count"],
  FriendshipOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id", "tokenVersion"],
  UserMaxOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id", "tokenVersion"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumFriendStatusFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  FriendshipFirst_user_idSecond_user_idCompoundUniqueInput: ["first_user_id", "second_user_id"],
  FriendshipCountOrderByAggregateInput: ["first_user_id", "second_user_id", "status"],
  FriendshipAvgOrderByAggregateInput: ["first_user_id", "second_user_id"],
  FriendshipMaxOrderByAggregateInput: ["first_user_id", "second_user_id", "status"],
  FriendshipMinOrderByAggregateInput: ["first_user_id", "second_user_id", "status"],
  FriendshipSumOrderByAggregateInput: ["first_user_id", "second_user_id"],
  EnumFriendStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostCountOrderByAggregateInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  PostAvgOrderByAggregateInput: ["id", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  PostMinOrderByAggregateInput: ["id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  PostSumOrderByAggregateInput: ["id", "authorId"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostRelationFilter: ["is", "isNot"],
  CommentNullableRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  CommentAvgOrderByAggregateInput: ["id", "authorId", "postId", "replyId"],
  CommentMaxOrderByAggregateInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  CommentSumOrderByAggregateInput: ["id", "authorId", "postId", "replyId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumReactionTypeFilter: ["equals", "in", "notIn", "not"],
  ReactionCountOrderByAggregateInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  ReactionAvgOrderByAggregateInput: ["id", "authorId", "postId", "commentId"],
  ReactionMaxOrderByAggregateInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  ReactionMinOrderByAggregateInput: ["id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  ReactionSumOrderByAggregateInput: ["id", "authorId", "postId", "commentId"],
  EnumReactionTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReactionCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  FriendshipCreateNestedManyWithoutFirst_userInput: ["create", "connectOrCreate", "createMany", "connect"],
  FriendshipCreateNestedManyWithoutSecond_userInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReactionUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FriendshipUpdateManyWithoutFirst_userNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FriendshipUpdateManyWithoutSecond_userNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutFriendshipsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPrisma_friendshipsInput: ["create", "connectOrCreate", "connect"],
  EnumFriendStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutFriendshipsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutPrisma_friendshipsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReactionCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReactionUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  ReactionCreateNestedManyWithoutCommentInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutReplyInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedOneWithoutRepliesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ReactionUpdateManyWithoutCommentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutReplyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateOneWithoutRepliesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutReactionsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutReactionsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedOneWithoutReactionsInput: ["create", "connectOrCreate", "connect"],
  EnumReactionTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutReactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutReactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateOneWithoutReactionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumFriendStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumFriendStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumReactionTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumReactionTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostCreateWithoutAuthorInput: ["title", "body", "image_url", "createdAt", "updatedAt", "comments", "reactions"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutAuthorInput: ["body", "image_url", "createdAt", "updatedAt", "post", "reactions", "replies", "reply"],
  CommentCreateOrConnectWithoutAuthorInput: ["where", "create"],
  CommentCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ReactionCreateWithoutAuthorInput: ["type", "createdAt", "updatedAt", "post", "comment"],
  ReactionCreateOrConnectWithoutAuthorInput: ["where", "create"],
  ReactionCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  FriendshipCreateWithoutFirst_userInput: ["status", "second_user"],
  FriendshipCreateOrConnectWithoutFirst_userInput: ["where", "create"],
  FriendshipCreateManyFirst_userInputEnvelope: ["data", "skipDuplicates"],
  FriendshipCreateWithoutSecond_userInput: ["status", "first_user"],
  FriendshipCreateOrConnectWithoutSecond_userInput: ["where", "create"],
  FriendshipCreateManySecond_userInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "image_url", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  ReactionUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  ReactionUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  ReactionScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "type", "postId", "commentId", "createdAt", "updatedAt"],
  FriendshipUpsertWithWhereUniqueWithoutFirst_userInput: ["where", "update", "create"],
  FriendshipUpdateWithWhereUniqueWithoutFirst_userInput: ["where", "data"],
  FriendshipUpdateManyWithWhereWithoutFirst_userInput: ["where", "data"],
  FriendshipScalarWhereInput: ["AND", "OR", "NOT", "first_user_id", "second_user_id", "status"],
  FriendshipUpsertWithWhereUniqueWithoutSecond_userInput: ["where", "update", "create"],
  FriendshipUpdateWithWhereUniqueWithoutSecond_userInput: ["where", "data"],
  FriendshipUpdateManyWithWhereWithoutSecond_userInput: ["where", "data"],
  UserCreateWithoutFriendshipsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "prisma_friendships"],
  UserCreateOrConnectWithoutFriendshipsInput: ["where", "create"],
  UserCreateWithoutPrisma_friendshipsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships"],
  UserCreateOrConnectWithoutPrisma_friendshipsInput: ["where", "create"],
  UserUpsertWithoutFriendshipsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutFriendshipsInput: ["where", "data"],
  UserUpdateWithoutFriendshipsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "prisma_friendships"],
  UserUpsertWithoutPrisma_friendshipsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPrisma_friendshipsInput: ["where", "data"],
  UserUpdateWithoutPrisma_friendshipsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "reactions", "friendships"],
  UserCreateWithoutPostsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "comments", "reactions", "friendships", "prisma_friendships"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  CommentCreateWithoutPostInput: ["body", "image_url", "createdAt", "updatedAt", "author", "reactions", "replies", "reply"],
  CommentCreateOrConnectWithoutPostInput: ["where", "create"],
  CommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  ReactionCreateWithoutPostInput: ["type", "createdAt", "updatedAt", "author", "comment"],
  ReactionCreateOrConnectWithoutPostInput: ["where", "create"],
  ReactionCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPostsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
  UserUpdateWithoutPostsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "comments", "reactions", "friendships", "prisma_friendships"],
  CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  ReactionUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  ReactionUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  ReactionUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserCreateWithoutCommentsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "reactions", "friendships", "prisma_friendships"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "reactions"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  ReactionCreateWithoutCommentInput: ["type", "createdAt", "updatedAt", "author", "post"],
  ReactionCreateOrConnectWithoutCommentInput: ["where", "create"],
  ReactionCreateManyCommentInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutReplyInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies"],
  CommentCreateOrConnectWithoutReplyInput: ["where", "create"],
  CommentCreateManyReplyInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutRepliesInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "reply"],
  CommentCreateOrConnectWithoutRepliesInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
  UserUpdateWithoutCommentsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "reactions", "friendships", "prisma_friendships"],
  PostUpsertWithoutCommentsInput: ["update", "create", "where"],
  PostUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
  PostUpdateWithoutCommentsInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "reactions"],
  ReactionUpsertWithWhereUniqueWithoutCommentInput: ["where", "update", "create"],
  ReactionUpdateWithWhereUniqueWithoutCommentInput: ["where", "data"],
  ReactionUpdateManyWithWhereWithoutCommentInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutReplyInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutReplyInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutReplyInput: ["where", "data"],
  CommentUpsertWithoutRepliesInput: ["update", "create", "where"],
  CommentUpdateToOneWithWhereWithoutRepliesInput: ["where", "data"],
  CommentUpdateWithoutRepliesInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "reply"],
  UserCreateWithoutReactionsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "friendships", "prisma_friendships"],
  UserCreateOrConnectWithoutReactionsInput: ["where", "create"],
  PostCreateWithoutReactionsInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "comments"],
  PostCreateOrConnectWithoutReactionsInput: ["where", "create"],
  CommentCreateWithoutReactionsInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "replies", "reply"],
  CommentCreateOrConnectWithoutReactionsInput: ["where", "create"],
  UserUpsertWithoutReactionsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutReactionsInput: ["where", "data"],
  UserUpdateWithoutReactionsInput: ["firstName", "lastName", "email", "password", "image_url", "tokenVersion", "external_type", "external_id", "createdAt", "updatedAt", "posts", "comments", "friendships", "prisma_friendships"],
  PostUpsertWithoutReactionsInput: ["update", "create", "where"],
  PostUpdateToOneWithWhereWithoutReactionsInput: ["where", "data"],
  PostUpdateWithoutReactionsInput: ["title", "body", "image_url", "createdAt", "updatedAt", "author", "comments"],
  CommentUpsertWithoutReactionsInput: ["update", "create", "where"],
  CommentUpdateToOneWithWhereWithoutReactionsInput: ["where", "data"],
  CommentUpdateWithoutReactionsInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "replies", "reply"],
  PostCreateManyAuthorInput: ["id", "title", "body", "image_url", "createdAt", "updatedAt"],
  CommentCreateManyAuthorInput: ["id", "postId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionCreateManyAuthorInput: ["id", "type", "postId", "commentId", "createdAt", "updatedAt"],
  FriendshipCreateManyFirst_userInput: ["second_user_id", "status"],
  FriendshipCreateManySecond_userInput: ["first_user_id", "status"],
  PostUpdateWithoutAuthorInput: ["title", "body", "image_url", "createdAt", "updatedAt", "comments", "reactions"],
  CommentUpdateWithoutAuthorInput: ["body", "image_url", "createdAt", "updatedAt", "post", "reactions", "replies", "reply"],
  ReactionUpdateWithoutAuthorInput: ["type", "createdAt", "updatedAt", "post", "comment"],
  FriendshipUpdateWithoutFirst_userInput: ["status", "second_user"],
  FriendshipUpdateWithoutSecond_userInput: ["status", "first_user"],
  CommentCreateManyPostInput: ["id", "authorId", "replyId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionCreateManyPostInput: ["id", "authorId", "type", "commentId", "createdAt", "updatedAt"],
  CommentUpdateWithoutPostInput: ["body", "image_url", "createdAt", "updatedAt", "author", "reactions", "replies", "reply"],
  ReactionUpdateWithoutPostInput: ["type", "createdAt", "updatedAt", "author", "comment"],
  ReactionCreateManyCommentInput: ["id", "authorId", "type", "postId", "createdAt", "updatedAt"],
  CommentCreateManyReplyInput: ["id", "authorId", "postId", "body", "image_url", "createdAt", "updatedAt"],
  ReactionUpdateWithoutCommentInput: ["type", "createdAt", "updatedAt", "author", "post"],
  CommentUpdateWithoutReplyInput: ["body", "image_url", "createdAt", "updatedAt", "author", "post", "reactions", "replies"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

