const Query = `
type Query {
    manufacturer: Manufacturer,
    manufacturers: [Manufacturer],
    products: [Product],
    user(id: Int!): User,
    users: [User],
}
`;

export default Query;
