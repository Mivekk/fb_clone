import { ExecutionResult, graphql } from "graphql";

import { createSchema } from "../createSchema";
import prisma from "../client";

interface Options {
  source: any;
  variableValues?: any;
  contextValue?: any;
}

export const graphqlWrapper = async ({
  source,
  contextValue,
  variableValues,
}: Options): Promise<ExecutionResult> => {
  const schema = await createSchema();

  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      prisma,
      res: {
        cookie: (a: string, b: string, c: any) => {},
      },
      ...contextValue,
    },
  });
};
