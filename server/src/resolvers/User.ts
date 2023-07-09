import { MyApolloContext } from "../context";
import { User } from "../generated/type-graphql";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { LoginInput, RegisterInput } from "./inputs";
import { ResponseObject } from "./outputs";
import argon2 from "argon2";
import { createAccessToken, createRefreshToken } from "../auth/auth";
import { isAuth } from "../middleware/isAuth";
import { sendRefreshToken } from "../auth/sendRefreshToken";

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyApolloContext) {
    return `bye ${payload!.userId}`;
  }

  @Query(() => [User], { nullable: true })
  async users(@Ctx() { prisma }: MyApolloContext): Promise<User[] | null> {
    return await prisma.user.findMany({});
  }

  @Mutation(() => ResponseObject)
  async register(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("data") data: RegisterInput
  ): Promise<ResponseObject> {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      return { error: "user already exists" };
    }

    if (!data.email.includes("@")) {
      return { error: "incorrect email" };
    }

    if (data.password.length <= 3) {
      return { error: "password too short" };
    }

    const hashedPassword = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword },
    });

    return { user };
  }

  @Mutation(() => ResponseObject)
  async login(
    @Ctx() { prisma, res }: MyApolloContext,
    @Arg("data") data: LoginInput
  ): Promise<ResponseObject> {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      return { error: "user does not exist" };
    }

    const passwordsMatch = await argon2.verify(user.password, data.password);

    if (!passwordsMatch) {
      return { error: "passwords do not match" };
    }

    sendRefreshToken(res, createRefreshToken(user));

    console.log("accessToken:", createAccessToken(user));

    return { user };
  }

  @Mutation(() => Boolean)
  async revokeRefreshToken(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<boolean> {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { tokenVersion: { increment: 1 } },
    });

    if (!user) {
      return false;
    }

    return true;
  }
}
