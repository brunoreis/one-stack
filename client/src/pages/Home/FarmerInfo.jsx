import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FarmerInfo = ({ farmer }) => {
  const history = useHistory();
  return (
    <div>
      {farmer && (
        <div
          onClick={() => history.push(`entity/${farmer.id}`)}
        >
          {farmer.name}
        </div>
      )}
    </div>
  );
};

FarmerInfo.propTypes = {
  farmer: PropTypes.object,
};

FarmerInfo.defaultProps = {
  farmer: undefined,
};

export default FarmerInfo;
