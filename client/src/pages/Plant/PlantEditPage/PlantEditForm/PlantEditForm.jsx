import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import PLANT_UPDATE_MUTATION from './PlantUpdateMutation';
import validator from './PlantEditFormValidator';

const PlantEditForm = ({ plantId, history }) => {
  const [name, setName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [edibleParts, setEdibleParts] = useState('');
  const [tips, setTips] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const plantEditMutation = useMutation(
    PLANT_UPDATE_MUTATION,
    {
      variables: {
        id: plantId,
        name,
        scientificName,
        edibleParts,
        tips,
      },
    },
  );

  const submit = async () => {
    const formattedEdibleParts = edibleParts.split(',');
    const formattedTips = tips.split(';');
    const newValidation = validator.validate({
      name,
      scientificName,
      formattedEdibleParts,
      formattedTips,
    });
    if (newValidation.isValid) {
      const res = await plantEditMutation();
      if (res.data && res.data.updatePlant) {
        history.push(`/plant-details/${plantId}`);
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
        <label htmlFor="tips">Dicas de plantio (separadas por ponto-e-virgula)</label>
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

PlantEditForm.propTypes = {
  plantId: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(PlantEditForm);
