import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <nav
    className="navbar navbar-dark bg-primary"
    style={{ height: '75px' }}
  >
    <div
      className="row w-100 align-items-center bg-primary"
      style={{ height: '50px' }}
    >
      <div className="col text-white text-center">
        <h4>{text}</h4>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
