import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import Login from './Login';

const LoginContainer = compose(
  withState('errorMessage', 'setErrorMessage', ''),
  withState('shouldRedirect', 'setShouldRedirect', false),
  withHandlers({
    setResult: props => (fetchResult) => {
      props.setShouldRedirect(fetchResult.success);
      props.setErrorMessage(fetchResult.message);
    },
  }),
)(Login);

export default LoginContainer;
