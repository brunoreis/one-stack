import { graphql, compose } from 'react-apollo';
import UsersQuery from './UsersQuery';
import Users from './Users';

const UsersContainer = compose(
  graphql(UsersQuery, { name: 'usersQuery' }),
)(Users);

export default UsersContainer;
