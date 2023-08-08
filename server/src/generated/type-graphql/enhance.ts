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
  Post: relationResolvers.PostRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Reaction: relationResolvers.ReactionRelationsResolver
};
const relationResolversInfo = {
  User: ["posts", "comments", "reactions"],
  Post: ["author", "comments", "reactions"],
  Comment: ["author", "post"],
  Reaction: ["author", "post"]
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
  User: ["id", "firstName", "lastName", "email", "tokenVersion", "createdAt", "updatedAt"],
  Post: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  Comment: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  Reaction: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"]
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
  UserGroupBy: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "authorId", "title", "body", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "authorId", "postId", "body", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReaction: ["_count", "_avg", "_sum", "_min", "_max"],
  ReactionGroupBy: ["id", "authorId", "value", "postId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["posts", "comments", "reactions"],
  UserCountAggregate: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id", "tokenVersion"],
  UserSumAggregate: ["id", "tokenVersion"],
  UserMinAggregate: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  PostCount: ["comments", "reactions"],
  PostCountAggregate: ["id", "authorId", "title", "body", "createdAt", "updatedAt", "_all"],
  PostAvgAggregate: ["id", "authorId"],
  PostSumAggregate: ["id", "authorId"],
  PostMinAggregate: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  PostMaxAggregate: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  CommentCountAggregate: ["id", "authorId", "postId", "body", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["id", "authorId", "postId"],
  CommentSumAggregate: ["id", "authorId", "postId"],
  CommentMinAggregate: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  ReactionCountAggregate: ["id", "authorId", "value", "postId", "createdAt", "updatedAt", "_all"],
  ReactionAvgAggregate: ["id", "authorId", "value", "postId"],
  ReactionSumAggregate: ["id", "authorId", "value", "postId"],
  ReactionMinAggregate: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  ReactionMaxAggregate: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments", "reactions"],
  UserOrderByWithRelationInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments", "reactions"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "firstName", "lastName", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments", "reactions"],
  UserOrderByWithAggregationInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostOrderByWithRelationInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "title", "body", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostOrderByWithAggregationInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "body", "createdAt", "updatedAt", "author", "post"],
  CommentOrderByWithRelationInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt", "author", "post"],
  CommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "postId", "body", "createdAt", "updatedAt", "author", "post"],
  CommentOrderByWithAggregationInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  ReactionWhereInput: ["AND", "OR", "NOT", "id", "authorId", "value", "postId", "createdAt", "updatedAt", "author", "post"],
  ReactionOrderByWithRelationInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt", "author", "post"],
  ReactionWhereUniqueInput: ["id", "AND", "OR", "NOT", "authorId", "value", "postId", "createdAt", "updatedAt", "author", "post"],
  ReactionOrderByWithAggregationInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ReactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  UserCreateInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments", "reactions"],
  UserUpdateInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments", "reactions"],
  UserCreateManyInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  PostCreateInput: ["title", "body", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostUpdateInput: ["title", "body", "createdAt", "updatedAt", "author", "comments", "reactions"],
  PostCreateManyInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  PostUpdateManyMutationInput: ["title", "body", "createdAt", "updatedAt"],
  CommentCreateInput: ["body", "createdAt", "updatedAt", "author", "post"],
  CommentUpdateInput: ["body", "createdAt", "updatedAt", "author", "post"],
  CommentCreateManyInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["body", "createdAt", "updatedAt"],
  ReactionCreateInput: ["value", "createdAt", "updatedAt", "author", "post"],
  ReactionUpdateInput: ["value", "createdAt", "updatedAt", "author", "post"],
  ReactionCreateManyInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  ReactionUpdateManyMutationInput: ["value", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  ReactionListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  ReactionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id", "tokenVersion"],
  UserMaxOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id", "tokenVersion"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  PostAvgOrderByAggregateInput: ["id", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  PostMinOrderByAggregateInput: ["id", "authorId", "title", "body", "createdAt", "updatedAt"],
  PostSumOrderByAggregateInput: ["id", "authorId"],
  PostRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  CommentAvgOrderByAggregateInput: ["id", "authorId", "postId"],
  CommentMaxOrderByAggregateInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  CommentSumOrderByAggregateInput: ["id", "authorId", "postId"],
  ReactionCountOrderByAggregateInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  ReactionAvgOrderByAggregateInput: ["id", "authorId", "value", "postId"],
  ReactionMaxOrderByAggregateInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  ReactionMinOrderByAggregateInput: ["id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  ReactionSumOrderByAggregateInput: ["id", "authorId", "value", "postId"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReactionCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReactionUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReactionCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ReactionUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutReactionsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutReactionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutReactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutReactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PostCreateWithoutAuthorInput: ["title", "body", "createdAt", "updatedAt", "comments", "reactions"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutAuthorInput: ["body", "createdAt", "updatedAt", "post"],
  CommentCreateOrConnectWithoutAuthorInput: ["where", "create"],
  CommentCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ReactionCreateWithoutAuthorInput: ["value", "createdAt", "updatedAt", "post"],
  ReactionCreateOrConnectWithoutAuthorInput: ["where", "create"],
  ReactionCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "title", "body", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "postId", "body", "createdAt", "updatedAt"],
  ReactionUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  ReactionUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  ReactionUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  ReactionScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "value", "postId", "createdAt", "updatedAt"],
  UserCreateWithoutPostsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "comments", "reactions"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  CommentCreateWithoutPostInput: ["body", "createdAt", "updatedAt", "author"],
  CommentCreateOrConnectWithoutPostInput: ["where", "create"],
  CommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  ReactionCreateWithoutPostInput: ["value", "createdAt", "updatedAt", "author"],
  ReactionCreateOrConnectWithoutPostInput: ["where", "create"],
  ReactionCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPostsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
  UserUpdateWithoutPostsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "comments", "reactions"],
  CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  ReactionUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  ReactionUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  ReactionUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserCreateWithoutCommentsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "reactions"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["title", "body", "createdAt", "updatedAt", "author", "reactions"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
  UserUpdateWithoutCommentsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "reactions"],
  PostUpsertWithoutCommentsInput: ["update", "create", "where"],
  PostUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
  PostUpdateWithoutCommentsInput: ["title", "body", "createdAt", "updatedAt", "author", "reactions"],
  UserCreateWithoutReactionsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments"],
  UserCreateOrConnectWithoutReactionsInput: ["where", "create"],
  PostCreateWithoutReactionsInput: ["title", "body", "createdAt", "updatedAt", "author", "comments"],
  PostCreateOrConnectWithoutReactionsInput: ["where", "create"],
  UserUpsertWithoutReactionsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutReactionsInput: ["where", "data"],
  UserUpdateWithoutReactionsInput: ["firstName", "lastName", "email", "password", "tokenVersion", "createdAt", "updatedAt", "posts", "comments"],
  PostUpsertWithoutReactionsInput: ["update", "create", "where"],
  PostUpdateToOneWithWhereWithoutReactionsInput: ["where", "data"],
  PostUpdateWithoutReactionsInput: ["title", "body", "createdAt", "updatedAt", "author", "comments"],
  PostCreateManyAuthorInput: ["id", "title", "body", "createdAt", "updatedAt"],
  CommentCreateManyAuthorInput: ["id", "postId", "body", "createdAt", "updatedAt"],
  ReactionCreateManyAuthorInput: ["id", "value", "postId", "createdAt", "updatedAt"],
  PostUpdateWithoutAuthorInput: ["title", "body", "createdAt", "updatedAt", "comments", "reactions"],
  CommentUpdateWithoutAuthorInput: ["body", "createdAt", "updatedAt", "post"],
  ReactionUpdateWithoutAuthorInput: ["value", "createdAt", "updatedAt", "post"],
  CommentCreateManyPostInput: ["id", "authorId", "body", "createdAt", "updatedAt"],
  ReactionCreateManyPostInput: ["id", "authorId", "value", "createdAt", "updatedAt"],
  CommentUpdateWithoutPostInput: ["body", "createdAt", "updatedAt", "author"],
  ReactionUpdateWithoutPostInput: ["value", "createdAt", "updatedAt", "author"]
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

