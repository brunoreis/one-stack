import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import PLANT_CREATE_MUTATION from './PlantCreateMutation';
import validator from './PlantCreateFormValidator';

const PlantCreateForm = ({ history }) => {
  const [name, setName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [edibleParts, setEdibleParts] = useState('');
  const [tips, setTips] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const plantCreateMutation = useMutation(
    PLANT_CREATE_MUTATION,
    {
      variables: {
        name,
        scientificName,
        edibleParts,
      },
    },
  );

  const submit = async () => {
    const newValidation = validator.validate({
      name,
      scientificName,
      edibleParts,
    });
    if (newValidation.isValid) {
      const res = await plantCreateMutation();
      if (res.data && res.data.createPlant) {
        history.push('plant-list');
      } else {
        console.log('erro ao criar planta');
      }
    } else setValidation(newValidation);
  };

  return (
    <form className="container">

      <div className="form-group">
        <label htmlFor="name">Nome da planta*</label>
        <input
          type="text"
          className="form-control"
          id="name"
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
        <label htmlFor="scientificName">Nome científico</label>
        <input
          type="text"
          className="form-control"
          id="scientificName"
          value={scientificName}
          onChange={e => setScientificName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edibleParts">Partes comestíveis (separadas por vírgula)</label>
        <input
          type="text"
          className="form-control"
          id="edibleParts"
          value={edibleParts}
          onChange={e => setEdibleParts(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tips">Dicas de plantio</label>
        <textarea
          className="form-control"
          type="text"
          id="tips"
          value={tips}
          onChange={e => setTips(e.target.value)}
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

PlantCreateForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(PlantCreateForm);
