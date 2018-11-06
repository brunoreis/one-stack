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
    }).then((res) => {
      if (res.data && res.data.createUser) {
        props.loginNewUser(props.email, props.password);
      } else {
        console.log('erro ao criar usuário');
      }
    }),
  }),
)(GardenerCreateForm);

export default GardenerCreateFormContainer;
