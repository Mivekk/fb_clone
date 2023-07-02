"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const CreateManyUserArgs_1 = require("./args/CreateManyUserArgs");
const CreateOneUserArgs_1 = require("./args/CreateOneUserArgs");
const DeleteManyUserArgs_1 = require("./args/DeleteManyUserArgs");
const DeleteOneUserArgs_1 = require("./args/DeleteOneUserArgs");
const FindFirstUserArgs_1 = require("./args/FindFirstUserArgs");
const FindFirstUserOrThrowArgs_1 = require("./args/FindFirstUserOrThrowArgs");
const FindManyUserArgs_1 = require("./args/FindManyUserArgs");
const FindUniqueUserArgs_1 = require("./args/FindUniqueUserArgs");
const FindUniqueUserOrThrowArgs_1 = require("./args/FindUniqueUserOrThrowArgs");
const GroupByUserArgs_1 = require("./args/GroupByUserArgs");
const UpdateManyUserArgs_1 = require("./args/UpdateManyUserArgs");
const UpdateOneUserArgs_1 = require("./args/UpdateOneUserArgs");
const UpsertOneUserArgs_1 = require("./args/UpsertOneUserArgs");
const helpers_1 = require("../../../helpers");
const User_1 = require("../../../models/User");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const UserGroupBy_1 = require("../../outputs/UserGroupBy");
let UserCrudResolver = exports.UserCrudResolver = class UserCrudResolver {
    aggregateUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
        });
    }
    createManyUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createOneUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteOneUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstUserOrThrow(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    users(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    user(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    getUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    groupByUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
    updateManyUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateOneUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertOneUser(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).user.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "aggregateUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserArgs_1.CreateManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneUserArgs_1.CreateOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createOneUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserArgs_1.DeleteManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneUserArgs_1.DeleteOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteOneUser", null);
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserArgs_1.FindFirstUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUser", null);
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserOrThrowArgs_1.FindFirstUserOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUserOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [User_1.User], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserArgs_1.FindManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "users", null);
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserArgs_1.FindUniqueUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserOrThrowArgs_1.FindUniqueUserOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "getUser", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserGroupBy_1.UserGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserArgs_1.GroupByUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "groupByUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserArgs_1.UpdateManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneUserArgs_1.UpdateOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateOneUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneUserArgs_1.UpsertOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "upsertOneUser", null);
exports.UserCrudResolver = UserCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserCrudResolver);
//# sourceMappingURL=UserCrudResolver.js.map