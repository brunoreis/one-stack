import entityType from './entityType/schema';
import contactType from './contactType/schema';
import linkType from './linkType/schema';
import memberType from './memberType/schema';
import country from './country/schema';
import entity from './entity/schema';
import contact from './contact/schema';
import contactItem from './contactItem/schema';
import link from './link/schema';
import entityMember from './entityMember/schema';
import user from './user/schema';

const Schema = `
schema {
  query: Query,
  mutation: Mutation
}
type Query {
  default: Int
}
type Mutation {
  default: Int
}
`;

export default [
  Schema,
  ...entityType,
  ...contactType,
  ...linkType,
  ...memberType,
  ...country,
  ...entity,
  ...contact,
  ...contactItem,
  ...link,
  ...entityMember,
  ...user,
];
