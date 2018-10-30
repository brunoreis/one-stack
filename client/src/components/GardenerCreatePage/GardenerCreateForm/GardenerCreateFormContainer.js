import { compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import GardenerCreateForm from './GardenerCreateForm';

const GardenerCreateFormContainer = compose(
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  // withState('errorMessage', 'setErrorMessage', ''),
  withHandlers({
    onSubmit: props => () => {
      console.log('form enviado: ', props);
      // gardenerCreateFetch(props.email, props.password)
      //   .then(({ message, success }) => {
      //     !success && props.setErrorMessage(message);
      //     success && props.onSuccess();
      //   });
    },
  }),
)(GardenerCreateForm);

export default GardenerCreateFormContainer;
