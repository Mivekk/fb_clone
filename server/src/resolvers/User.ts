import { Context } from "../context";
import { User } from "../generated/type-graphql";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(@Ctx() { prisma }: Context): Promise<User[] | null> {
    const users = await prisma.user.findMany({});

    return users;
  }
}
