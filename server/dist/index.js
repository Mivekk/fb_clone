"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const express4_1 = require("@apollo/server/express4");
const context_1 = require("./context");
const User_1 = require("./resolvers/User");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const port = 4000;
    const schema = yield (0, type_graphql_1.buildSchema)({
        resolvers: [User_1.UserResolver],
        validate: false,
    });
    const server = new server_1.ApolloServer({
        schema,
    });
    yield server.start();
    app.use("/graphql", (0, cors_1.default)(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, { context: () => __awaiter(void 0, void 0, void 0, function* () { return context_1.context; }) }));
    app.listen(port, () => {
        console.log("Server started on port", port);
    });
});
main();
//# sourceMappingURL=index.js.map