import { graphql, compose } from 'react-apollo';
import LoggedUserQuery from './LoggedUserQuery';
import LoggedUser from './LoggedUser';

const LoggedUserContainer = compose(
  graphql(LoggedUserQuery, { name: 'loggedUserQuery' }),
)(LoggedUser);

export default LoggedUserContainer;
