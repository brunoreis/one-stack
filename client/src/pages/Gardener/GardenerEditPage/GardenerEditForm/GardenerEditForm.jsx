import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import validator from './GardenerEditFormValidator';
import GARDENER_EDIT_MUTATION from './GardenerEditMutation';

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
    <form className="container">

      <div className="form-group">
        <label htmlFor="name">Nome Completo*</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {validation.name.isInvalid
        && (
        <div className="text-danger">
          {validation.name.message}
        </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Breve descrição</label>
        <textarea
          className="form-control"
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className="row">
        <button
          className="btn btn-primary btn-lg mx-auto"
          type="button"
          onClick={submit}
        >
          Salvar
        </button>
      </div>

    </form>
  );
};

GardenerEditForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(GardenerEditForm);
