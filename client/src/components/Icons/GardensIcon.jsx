import React from 'react';
import PropTypes from 'prop-types';

const GardensIcon = ({ count }) => {
  return (
    <div style={{
      height: '40px',
      width: '40px',
    }}
    >
      <div
        className="border rounded-circle text-center position-relative"
        style={{
          height: '35px',
          width: '35px',
        }}
      >
        <div className="d-block">
          <i className="fas fa-tree" />
        </div>

        <div
          className="bg-primary rounded-circle text-center text-white"
          style={{
            position: 'absolute',
            bottom: '-5px',
            right: '-5px',
            height: '20px',
            width: '20px',
          }}
        >
          {count}
        </div>
      </div>
    </div>
  );
};

GardensIcon.propTypes = {
  count: PropTypes.number.isRequired,
};

export default GardensIcon;
