import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'cloudinary-react';

const PlantDetails = ({
  plant: {
    name,
    edibleParts,
    tips,
    picture,
    createdAt,
    createdBy,
  },
}) => (
  <div>

    <Image
      cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
      publicId={picture || `${process.env.REACT_APP_CLOUDINARY_FOLDER}/plant/default`}
    />

    <div className="p-4">

      <div className="my-4 text-uppercase">
        <h4><strong>{name}</strong></h4>
      </div>

      <div className="mb-2 text-primary">
        Partes Comestíveis:
      </div>
      {
        edibleParts
        && edibleParts.map((part, i) => (
          <span key={i}>
            {part}
            {i + 1 < edibleParts.length && ', '}
          </span>
        ))
      }

      <div className="mt-4 mb-2 text-primary">
        Dicas de plantio:
      </div>
      {
        tips
        && tips.map((tip, i) => (
          <div
            className="mb-2"
            key={i}
          >
            {tip}
          </div>
        ))
      }

      <div className="mt-4">
        <strong>Criado por:</strong>
      </div>
      <span className="text-primary">{createdBy.name}</span>
      <span> em {createdAt || '02/05/1995'}</span>

      <div className="mt-4 mb-2 text-primary">
        Receitas:
      </div>

      <div style={{ height: '50px' }} />

    </div>
  </div>
);

PlantDetails.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default PlantDetails;
