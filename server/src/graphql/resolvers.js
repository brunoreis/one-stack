import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';
import linkType from './linkType/resolvers';
import memberType from './memberType/resolvers';
import country from './country/resolvers';
import entity from './entity/resolvers';
import contact from './contact/resolvers';
import contactItem from './contactItem/resolvers';
import link from './link/resolvers';
import entityMember from './entityMember/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
  mergeDeepLeft(linkType),
  mergeDeepLeft(memberType),
  mergeDeepLeft(country),
  mergeDeepLeft(entity),
  mergeDeepLeft(contact),
  mergeDeepLeft(contactItem),
  mergeDeepLeft(link),
  mergeDeepLeft(entityMember),
)(entityType);

export default mergedResolvers;
