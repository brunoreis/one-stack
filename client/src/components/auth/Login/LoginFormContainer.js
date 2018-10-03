import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import LoginForm from './LoginForm';
import fetchLogin from './fetchLogin';

const LoginContainer = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    sendForm: props => () => {
      fetchLogin(props.email, props.password)
        .then(result => props.setResult(result));
    },
  }),
)(LoginForm);

export default LoginContainer;
