export default `
extend type Mutation {

  createUser(
    input: CreateUserInput!
  ): CreateUserResult

  updateUser(
    input: UpdateUserInput!
  ): UpdateUserResult

  deleteUser(
    input: DeleteUserInput!
  ): DeleteUserResult

  passwordForgot(
    input: PasswordForgotInput!
  ): PasswordForgotResult
        
  passwordReset(
    input: PasswordResetInput!
  ): PasswordResetResult
}

input CreateUserInput {
  email: String!
  password: String!
  name: String!
}

input UpdateUserInput {
  id: ID!
  email: String
  password: String
  resetPasswordToken: String
  resetPasswordExpires: String
}

input DeleteUserInput {
  id: ID!
}

input PasswordForgotInput {
  email: String!
}

input PasswordResetInput {
  token: String!,
    password: String!
}

type CreateUserResult {
  user: User
}

type UpdateUserResult {
  user: User
}

type DeleteUserResult {
  count: Int
}

type PasswordForgotResult {
  success: Boolean
  message: String
}
    
type PasswordResetResult {
  success: Boolean
  message: String
}
`;
