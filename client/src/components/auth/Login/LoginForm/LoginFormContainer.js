import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import LoginForm from './LoginForm';
import fetchLogin from '../fetchLogin';

const LoginFormContainer = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('errorMessage', 'setErrorMessage', ''),
  withHandlers({
    login: props => () => {
      fetchLogin(props.email, props.password)
        .then(({ message, success }) => {
          !success && props.setErrorMessage(message);
          success && props.onSuccess();
        });
    },
  }),
)(LoginForm);

export default LoginFormContainer;
