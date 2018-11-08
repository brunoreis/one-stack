const Query = `
type Query {
    manufacturer: Manufacturer
    manufacturers: [Manufacturer]
    products: [Product]
    user(id: Int!): User
    users: [User]
    loggedUser: User
    gardener(id: Int!): Gardener
    gardeners: [Gardener]
    gardenersConnection: QueryGardenersConnection
}
`;

export default Query;
