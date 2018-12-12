import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoutButton from './auth/Logout/LogoutButton';

const SideMenu = ({ history }) => (
  <div>
    side menu
    <div className="row">
      <Link className="col-12" to="/signup">
        Sign up
      </Link>
      <Link className="col-12" to="/login">
        Login
      </Link>
      <div className="col-12">
        <LogoutButton
          onLogout={() => history.push('/')}
        />
      </div>
      <Link className="col-12" to="/gardeners">
        Jardineiros
      </Link>
    </div>
  </div>
);

SideMenu.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SideMenu);
