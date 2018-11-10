import { graphql, compose } from 'react-apollo';
import { withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

import GardenerEditForm from './GardenerEditForm';
import GardenerEditMutation from './GardenerEditMutation';
import validator from './GardenerEditFormValidator';

const GardenerEditFormContainer = compose(
  graphql(GardenerEditMutation, { name: 'gardenerEditMutation' }),
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('validation', 'setValidation', validator.valid()),
  withRouter,
  withHandlers({
    submit: props => () => {
      const validation = validator.validate({
        name: props.name,
        description: props.description,
      });
      if (validation.isValid) {
        props.gardenerEditMutation({
          variables: {
            name: props.name,
            description: props.description,
          },
        }).then(async (res) => {
          if (res.data && res.data.updateGardener) {
            props.history.push('gardener-details');
          } else {
            console.log('erro ao atualizar usuário');
          }
        });
      } else props.setValidation(validation);
    },
  }),
)(GardenerEditForm);

export default GardenerEditFormContainer;
