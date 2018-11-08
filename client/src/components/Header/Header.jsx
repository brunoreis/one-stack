import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ text }) => (
  <div className="header common__fonts__normal">
    <div className="header__text">
      {text}
    </div>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
