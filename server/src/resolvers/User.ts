import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { createAccessToken, createRefreshToken } from "../auth/auth";
import { sendRefreshToken } from "../auth/sendRefreshToken";
import { MyApolloContext } from "../context";
import { LoginInput, RegisterInput } from "./inputs/inputs";
import { UserResponseObject } from "./outputs/outputs";

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponseObject)
  async register(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("data") data: RegisterInput
  ): Promise<UserResponseObject> {
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

  @Mutation(() => UserResponseObject)
  async login(
    @Ctx() { prisma, res }: MyApolloContext,
    @Arg("data") data: LoginInput
  ): Promise<UserResponseObject> {
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
