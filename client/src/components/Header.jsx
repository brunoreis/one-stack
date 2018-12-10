import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import LogoutButton from './auth/Logout/LogoutButton';

const Header = ({ history }) => (
  <div>

    <div className="container-fluid fixed-top">

      <div className="row justify-content-between">

        <div className="col-5">
          <strong className="mx-1">Jardineiros</strong>
          <Link className="mx-1" to="/">
            Home
          </Link>
          <spam className="mx-1">|</spam>
          <Link className="mx-1" to="/users">
            Users
          </Link>
          <spam className="mx-1">|</spam>
          <Link className="mx-1" to="/gardeners">
            Jardineiros
          </Link>
          <spam className="mx-1">|</spam>
          <Link className="mx-1" to="/gardener-details">
            Meu perfil
          </Link>
        </div>

        <div className="col-3">
          <Link className="mx-1" to="/signup">
            Sign up
          </Link>
          <spam className="mx-1">|</spam>
          <Link className="mx-1" to="/login">
            Login
          </Link>
          <spam className="mx-1">|</spam>
          <LogoutButton
            onLogout={() => history.push('/')}
          />
        </div>
      </div>

    </div>

    <div style={{ height: '25px' }} />

  </div>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
