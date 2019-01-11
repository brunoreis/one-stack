import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import GARDENER_UPDATE_MUTATION from './GARDENER_UPDATE_MUTATION';

import validator from './GardenerEditFormValidator';
import uploadWidget from '../../../../helpers/uploadWidget';


const GardenerEditForm = ({
  history,
  location: { state: { gardener } },
}) => {
  console.log(gardener);
  const [name, setName] = useState(gardener.name);
  const [description, setDescription] = useState(gardener.description);
  const [picture, setPicture] = useState(gardener.picture);
  const [validation, setValidation] = useState(validator.valid());

  const gardenerEditMutation = useMutation(
    GARDENER_UPDATE_MUTATION,
    {
      variables: {
        input: {
          name,
          description,
          picture,
        },
      },
    },
  );

  const submit = async () => {
    const newValidation = validator.validate({
      name,
      description,
      picture,
    });
    if (newValidation.isValid) {
      const res = await gardenerEditMutation();
      if (res.data && res.data.updateGardener.gardener) {
        history.push('gardener-details');
      } else {
        console.log('erro ao atualizar usuário');
      }
    } else setValidation(newValidation);
  };

  return (
    <form className="container">

      <div className="row">
        <button
          className="btn btn-primary btn-lg mx-auto my-4"
          type="button"
          onClick={() => uploadWidget(
            gardener.id || null,
            'gardener',
            setPicture,
          )}
        >
          Adicione uma foto
        </button>
      </div>

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
  location: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(GardenerEditForm);
