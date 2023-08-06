export interface User {
  __typename?: "User" | undefined;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Comment {
  __typename?: "Comment" | undefined;
  id: number;
  authorId: number;
  postId: number;
  body: string;
  author: User;
}

export interface Post {
  __typename?: "Post" | undefined;
  id: number;
  title: string;
  body: string;
  createdAt: any;
  updatedAt: any;
  author: User;
  comments: Comment[];
}
