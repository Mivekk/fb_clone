import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export interface MyApolloContext {
  prisma: PrismaClient;
  payload?: { userId: number };
  req: Request;
  res: Response;
}
