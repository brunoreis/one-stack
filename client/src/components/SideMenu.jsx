import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoutButton from './auth/Logout/LogoutButton';

// import './SideMenu.css';

const SideMenu = ({ history }) => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="collapse"
      data-target="#side-menu"
    >
      Menu
    </button>

    <div id="side-menu">
      side menu
      <div className="d-flex flex-column">
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
  
  </div>
);

SideMenu.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SideMenu);
