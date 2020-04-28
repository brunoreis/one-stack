import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import LogoutButton from './auth/Logout/LogoutButton';

const SideMenu = () => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-light">
      <button
        name="navigation-toggle-button"
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
}

export default SideMenu;
