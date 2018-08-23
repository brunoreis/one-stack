"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import AuthPayload from './types/authpayload';
// import User from './types/user';

const Mutation = `
type Mutation {
  login(email: String!, password: String!): AuthPayload
  createUser(name: String!, password: String!, email: String!): User
  deleteUser(id: Int!): Int
}
`;

exports.default = Mutation;
// export default [Mutation, ...AuthPayload, ...User];
//# sourceMappingURL=mutation.js.map