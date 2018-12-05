const Query = `
type Query {
    user(id: Int!): User
    users: [User]
    loggedUser: User
    gardener(id: Int!): Gardener
    gardeners: [Gardener]
    gardenersConnection: QueryGardenersConnection
}
`;

export default Query;
