import React from 'react';
import PropTypes from 'prop-types';
import logout from './logout';

const LogoutButton = props => (
  <div
    className="d-inline"
    style={{ cursor: 'pointer' }}
    onClick={() => logout(props.onLogout)}
  >
    Logout
  </div>
);

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutButton;
