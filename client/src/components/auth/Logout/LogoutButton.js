import React from 'react';
import PropTypes from 'prop-types';
import logout from './logout';

const LogoutButton = props => (
  <button
    type="button"
    onClick={() => logout(props.onLogout)}
  >
    Logout
  </button>
);

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutButton;
