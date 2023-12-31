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

export const addReactionMutation = `
mutation AddReaction($data: AddReactionInput!) {
  addReaction(data: $data) {
    id
    authorId
    postId
    type
  }
}
`;

export const addFriendMutation = `
mutation AddFriend($userId: Float!) {
  addFriend(userId: $userId)
}
`;

export const acceptFriendMutation = `
mutation AcceptFriend($userId: Float!) {
  acceptFriend(userId: $userId)
}
`;

export const friendStatusQuery = `
query FriendStatus($userId: Float!) {
  friendStatus(userId: $userId)
}
`;
