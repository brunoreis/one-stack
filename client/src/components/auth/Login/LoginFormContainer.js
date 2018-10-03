import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import LoginForm from './LoginForm';
import fetchLogin from './fetchLogin';

const LoginContainer = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('errorMessage', 'setErrorMessage', ''),
  withHandlers({
    sendForm: props => () => {
      fetchLogin(props.email, props.password)
        .then(({ message, success }) => {
          props.setErrorMessage(message);
          success && props.onSuccess();
        });
    },
  }),
)(LoginForm);

export default LoginContainer;
