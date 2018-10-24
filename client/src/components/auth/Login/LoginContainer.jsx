import { compose } from 'react-apollo';
import { withHandlers } from 'recompose';

import Login from './Login';

const LoginContainer = compose(
  withHandlers({
    onLoginSuccess: ({ history }) => () => history.push('/loggedUser'),
  }),
)(Login);

export default LoginContainer;
