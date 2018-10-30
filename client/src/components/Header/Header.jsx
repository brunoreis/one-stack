import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ text }) => (
  <div className="header">
    {text}
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
