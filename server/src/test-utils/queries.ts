export const meQuery = `
query Me {
  me {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
}
`;

export const loginMutation = `
mutation Login($data: LoginInput!) {
  login(data: $data) {
    user {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
    accessToken
    error
  }
}
`;

export const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
    error
  }
}`;

export const createPostMutation = `
mutation CreatePost($data: CreatePostInput!) {
  createPost(data: $data) {
    post {
      id
      authorId
      title
      body
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
      comments {
        id
        body
        author {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
      }
    }
    error
  }
}
`;

export const deletePostMutation = `
mutation DeletePost($postId: Float!) {
  deletePost(postId: $postId)
}
`;

export const addCommentMutation = `
mutation AddComment($data: AddCommentInput!) {
  addComment(data: $data) {
    comment {
      id
      authorId
      postId
      body
    }
    error
  }
}
`;

export const deleteCommentMutation = `
mutation DeleteComment($commentId: Float!) {
  deleteComment(commentId: $commentId)
}
`;

export const reactMutation = `
mutation React($data: AddReactionInput!) {
  react(data: $data) {
    id
    authorId
    postId
    type
  }
}
`;
