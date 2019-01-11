import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

import RecipesIcon from '../../../../../components/Icons/RecipesIcon';
import GardensIcon from '../../../../../components/Icons/GardensIcon';

const PlantItem = ({ plant }) => (
  <div className="p-2 border">

    <div className="media">

      <div className="m-2">
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={plant.picture || `${process.env.REACT_APP_CLOUDINARY_FOLDER}/plant/default`}
        >
          <Transformation
            crop="fill"
            height="55"
            width="55"
          />
          <Transformation radius="15" />
        </Image>
      </div>

      <div className="media-body text-truncate">

        <div
          className="text-uppercase text-truncate"
        >
          <h5><strong>{plant.name}</strong></h5>
        </div>

        <div className="d-flex justify-content-between">

          <div
            style={{
              whiteSpace: 'normal',
            }}
          >
            <div className="text-secondary">
              COMESTÍVEIS:
            </div>
            <div>
              {
              plant.edibleParts
              && plant.edibleParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i + 1 < plant.edibleParts.length && ', '}
                </span>
              ))}
            </div>
          </div>

          <div className="d-flex">
            <RecipesIcon count={0} />
            <GardensIcon count={1} />
          </div>
        </div>

      </div>

    </div>
  </div>
);

PlantItem.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default PlantItem;
