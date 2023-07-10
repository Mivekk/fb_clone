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
