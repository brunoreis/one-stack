"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = Query;
// export default [Query, ...Product, ...User];
//# sourceMappingURL=query.js.map