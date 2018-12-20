import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import PLANT_UPDATE_MUTATION from './PlantUpdateMutation';
import validator from './PlantEditFormValidator';

const PlantEditForm = ({
  plantId,
  history,
  plant,
}) => {
  console.log('plant: ', plant);
  const [name, setName] = useState(plant.name);
  const [scientificName, setScientificName] = useState(plant.scientificName);
  const [edibleParts, setEdibleParts] = useState(plant.edibleParts.join());
  const [tips, setTips] = useState(plant.tips.join('; '));
  const [validation, setValidation] = useState(validator.valid());

  const plantEditMutation = useMutation(
    PLANT_UPDATE_MUTATION,
    {
      variables: {
        id: plantId,
        name,
        scientificName,
        edibleParts: edibleParts.split(',').map(part => part.trim()),
        tips: tips.split(';').map(tip => tip.trim()),
      },
    },
  );

  const submit = async () => {
    const newValidation = validator.validate({
      name,
      scientificName,
      edibleParts,
      tips,
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
          placeholder="bla"
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
        {validation.edibleParts.isInvalid
        && (
        <div className="text-danger">
          {validation.edibleParts.message}
        </div>
        )}
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
  plant: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(PlantEditForm);
