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

export const createPostMutation = `
mutation CreatePost($data: PostInput!) {
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
