import { graphql, compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

import GardenerCreateForm from './GardenerCreateForm';
import GardenerCreateMutation from './GardenerCreateMutation';
import fetchLogin from '../../../helpers/fetchLogin';

import validator from './GardenerCreateFormValidator';

const GardenerCreateFormContainer = compose(
  graphql(GardenerCreateMutation, { name: 'gardenerCreateMutation' }),
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('validation', 'setValidation', validator.valid()),
  withRouter,
  withHandlers({
    submit: props => () => {
      const validation = validator.validate({
        email: props.email,
        password: props.password,
        name: props.name,
        description: props.description,
      });
      if (validation.isValid) {
        props.gardenerCreateMutation({
          variables: {
            email: props.email,
            password: props.password,
            name: props.name,
            description: props.description,
          },
        }).then(async (res) => {
          if (res.data && res.data.createUser) {
            await fetchLogin(props.email, props.password);
            props.history.push('gardener-details');
          } else {
            console.log('erro ao criar usuário');
          }
        });
      } else props.setValidation(validation);
    },
  }),
)(GardenerCreateForm);

export default GardenerCreateFormContainer;
