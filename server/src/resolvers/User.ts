import { Context } from "../context";
import { User } from "../generated/type-graphql";
import { Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(@Ctx() { prisma }: Context): Promise<User[] | null> {
    return await prisma.user.findMany({});
  }
}
