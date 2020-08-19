import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FarmerInfo = ({ farmer }) => {
  const history = useHistory();
  return (
    farmer ? (
      <div>
        <div
          onClick={() => history.push(`entity/${farmer.id}`)}
        >
          {farmer.name}
        </div>
      </div>
    ) : (
      <div>Selecione um produtor</div>
    )
  );
};

FarmerInfo.propTypes = {
  farmer: PropTypes.object,
};

FarmerInfo.defaultProps = {
  farmer: undefined,
};

export default FarmerInfo;
