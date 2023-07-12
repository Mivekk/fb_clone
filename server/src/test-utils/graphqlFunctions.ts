import { graphqlWrapper } from "./graphqlWrapper";
import { createPostMutation, loginMutation, registerMutation } from "./queries";

export const graphqlRegister = async (
  email: string = "rich@drip.pl"
): Promise<any> => {
  return await graphqlWrapper({
    source: registerMutation,
    variableValues: {
      data: {
        firstName: "Rich",
        lastName: "Drip",
        email,
        password: "richdrip",
      },
    },
  });
};

export const graphqlLogin = async (
  email: string = "rich@drip.pl"
): Promise<any> => {
  return await graphqlWrapper({
    source: loginMutation,
    variableValues: {
      data: {
        email,
        password: "richdrip",
      },
    },
  });
};

export const graphqlCreatePost = async (accessToken: string): Promise<any> => {
  return await graphqlWrapper({
    source: createPostMutation,
    variableValues: {
      data: {
        title: "test title",
        body: "test body",
      },
    },
    contextValue: {
      req: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    },
  });
};
