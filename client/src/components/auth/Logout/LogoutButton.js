import React from 'react';

import logout from './logout';

const LogoutButton = props => (
  <button
    type="button"
    onClick={() => logout(props.onLogout)}
  >
    Logout
  </button>
);

export default LogoutButton;
