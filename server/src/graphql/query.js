// import Product from './types/product';
// import User from './types/user';

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
// export default [Query, ...Product, ...User];
