import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import LoginForm from './LoginForm';
import fetchLogin from './fetchLogin';

const LoginContainer = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onSubmit: props => async (event) => {
      console.log(event);
      const result = await fetchLogin(event);
      props.setResult(result);
    },
  }),
)(LoginForm);

export default LoginContainer;
