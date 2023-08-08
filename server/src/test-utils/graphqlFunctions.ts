import { graphqlWrapper } from "./graphqlWrapper";
import {
  addCommentMutation,
  createPostMutation,
  deleteCommentMutation,
  deletePostMutation,
  loginMutation,
  registerMutation,
} from "./queries";

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

export const graphqlDeletePost = async (
  accessToken: string,
  postId: number
): Promise<any> => {
  return await graphqlWrapper({
    source: deletePostMutation,
    variableValues: {
      postId,
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

export const graphqlAddComment = async (
  accessToken: string,
  postId: number
): Promise<any> => {
  return await graphqlWrapper({
    source: addCommentMutation,
    variableValues: {
      data: {
        body: "test body",
        postId,
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

export const graphqlDeleteComment = async (
  accessToken: string,
  commentId: number
): Promise<any> => {
  return await graphqlWrapper({
    source: deleteCommentMutation,
    variableValues: {
      commentId,
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
