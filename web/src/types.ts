export type UserType = {
  __typename?: "User" | undefined;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type CommentType = {
  __typename?: "Comment" | undefined;
  id: number;
  authorId: number;
  postId: number;
  body: string;
  author: UserType;
};

export type PostType = {
  __typename?: "Post" | undefined;
  id: number;
  title: string;
  body: string;
  createdAt: any;
  updatedAt: any;
  author: UserType;
  comments: CommentType[];
};
