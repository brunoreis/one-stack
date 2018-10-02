import { graphql, compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';
import PasswordForgotMutation from './PasswordForgotMutation';
import PasswordForgot from './PasswordForgot';

const PasswordForgotContainer = compose(
  graphql(PasswordForgotMutation, { name: 'passwordForgotMutate' }),
  withState('email', 'setEmail', ''),
  withState('message', 'setMessage', ''),
  withHandlers({
    passwordForgotMutate: props => () => props.passwordForgotMutate({
      variables: { email: props.email },
    }).then(
      r => props.setMessage(r.data.passwordForgot.message),
    ),
  }),
)(PasswordForgot);

export default PasswordForgotContainer;
