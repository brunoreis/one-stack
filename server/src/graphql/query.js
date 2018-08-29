const Query = `
type Query {
    manufacturer: Manufacturer,
    manufacturers: [Manufacturer],
    products: [Product],
    user(id: Int!): User,
    users: [User],
    loggedUser: User,
}
`;

export default Query;
