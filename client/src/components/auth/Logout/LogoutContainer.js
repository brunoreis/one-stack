import { compose } from 'react-apollo';
import { withState } from 'recompose';

import Logout from './Logout';

const LogoutContainer = compose(
  withState('fetched', 'setFetched', false),
)(Logout);

export default LogoutContainer;
