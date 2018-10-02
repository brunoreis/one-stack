import { graphql, compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';
import PasswordResetMutation from './PasswordResetMutation';
import PasswordReset from './PasswordReset';

const PasswordResetContainer = compose(
  graphql(PasswordResetMutation, { name: 'passwordResetMutate' }),
  withState('newPassword', 'setNewPassword', ''),
  withState('message', 'setMessage', ''),
  withHandlers({
    passwordResetMutate: props => () => props.passwordResetMutate({
      variables: {
        token: props.match.params.token,
        password: props.newPassword,
      },
    }).then(
      r => props.setMessage(r.data.passwordReset.message),
    ),
  }),
)(PasswordReset);

PasswordResetContainer.displayName = 'PasswordResetContainer';

export default PasswordResetContainer;
