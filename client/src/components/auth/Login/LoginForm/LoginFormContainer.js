import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

import LoginForm from './LoginForm';
import fetchLogin from '../../../../helpers/fetchLogin';

const LoginFormContainer = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('errorMessage', 'setErrorMessage', ''),
  withRouter,
  withHandlers({
    login: props => () => {
      fetchLogin(props.email, props.password)
        .then(({ message, success }) => {
          if (success) props.history.push('/gardener-details');
          else props.setErrorMessage(message);
        });
    },
  }),
)(LoginForm);

export default LoginFormContainer;
