import { graphql, compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';

import GardenerCreateForm from './GardenerCreateForm';
import GardenerCreateMutation from './GardenerCreateMutation';

const GardenerCreateFormContainer = compose(
  graphql(GardenerCreateMutation, { name: 'gardenerCreateMutate' }),
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    gardenerCreateMutate: props => () => props.gardenerCreateMutate({
      variables: {
        email: props.email,
        password: props.password,
        name: props.name,
        description: props.description,
      },
    }).then((r) => {
      console.log('response: ', r);
      // props.setMessage(r.data.passwordForgot.message);
    }),
  }),
)(GardenerCreateForm);

export default GardenerCreateFormContainer;
