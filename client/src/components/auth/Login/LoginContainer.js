import { compose } from 'react-apollo';
import { withHandlers } from 'recompose';

import Login from './Login';

const LoginContainer = compose(
  withHandlers({
    afterFetch: props => () => props.history.push('/loggedUser'),
  }),
)(Login);

export default LoginContainer;
