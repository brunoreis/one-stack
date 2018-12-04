import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import SendButton from '../../../components/SendButton/SendButton';

import validator from './GardenerEditFormValidator';
import GARDENER_EDIT_MUTATION from './GardenerEditMutation';

import './styles.css';

const GardenerEditForm = ({ history }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const gardenerEditMutation = useMutation(
    GARDENER_EDIT_MUTATION,
    {
      variables: {
        name,
        description,
      },
    },
  );

  const submit = async () => {
    const newValidation = validator.validate({
      name,
      description,
    });
    if (newValidation.isValid) {
      const res = await gardenerEditMutation({
        variables: {
          name,
          description,
        },
      });

      if (res.data && res.data.updateGardener) {
        history.push('gardener-details');
      } else {
        console.log('erro ao atualizar usuário');
      }
    } else setValidation(newValidation);
  };

  return (
    <div className="gardener-edit-form common__fonts__normal">

      <div className="gardener-edit-form__form-item">
        <div>Nome Completo*</div>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {validation.name.isInvalid
        && (
        <div className="gardener-edit-form__form-item__error">
          {validation.name.message}
        </div>
        )}
      </div>

      <div className="gardener-edit-form__form-item">
        <div>Breve descrição</div>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className="gardener-edit-form__form-item">
        <SendButton
          onClick={submit}
        />
      </div>

    </div>
  );
};

GardenerEditForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(GardenerEditForm);
