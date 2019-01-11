import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

import RecipesIcon from '../../../../../components/Icons/RecipesIcon';

const Gardener = ({ gardener }) => (
  <div className="p-2 border">

    <div className="media">

      {/* <img
        style={{
          height: '40px',
          margin: '5px',
        }}
        src={gardener.picture || noUserIcon}
        alt="gardener profile"
      /> */}

      <div className="m-2">
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={gardener.picture || `${process.env.REACT_APP_CLOUDINARY_FOLDER}/gardener/default`}
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
        <div>
          <h6><strong>{gardener.name}</strong></h6>
        </div>
        <div className="text-secondary text-truncate">
          {gardener.description}
        </div>
      </div>

    </div>

    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >

      <div className="text-truncate">
        <span className="text-secondary">JARDINS: </span>
        {gardener.gardensConnection
          && gardener.gardensConnection.edges.length > 0
          ? gardener.gardensConnection.edges.map(({ node }) => (
            <span key={node.id}>
              {node.name}
              {', '}
            </span>))
          : (
            <span>
              Não há jardins cadastrados
            </span>)
          }
      </div>

      <div>
        <RecipesIcon
          count={
            (
              gardener.recipesConnection
              && gardener.recipesConnection.totalCount
            ) || 0
          }
        />
      </div>
    </div>
  </div>
);

Gardener.propTypes = {
  gardener: PropTypes.object.isRequired,
};

export default Gardener;
