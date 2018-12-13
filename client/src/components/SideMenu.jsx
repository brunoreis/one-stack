import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoutButton from './auth/Logout/LogoutButton';

const SideMenu = ({ history }) => (
  <nav className="navbar navbar-light">
    <button
      className="navbar-toggler bg-light"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav bg-light">
        <Link className="" to="/signup">
          Sign up
        </Link>
        <Link className="" to="/login">
          Login
        </Link>
        <div className="">
          <LogoutButton
            onLogout={() => history.push('/')}
          />
        </div>
        <Link className="" to="/gardeners">
          Jardineiros
        </Link>
      </div>
    </div>
  </nav>
);

SideMenu.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SideMenu);
