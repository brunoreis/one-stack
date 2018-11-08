import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LogoutButton from './auth/Logout/LogoutButton';

const Header = props => (
  <div className="flex pa1 justify-between nowrap orange">
    <div className="flex flex-fixed black">
      <div className="fw7 mr1">Jardineiros</div>
      <Link to="/" className="ml1 no-underline black">
        Home
      </Link>
      <div className="ml1">|</div>
      <Link to="/users" className="ml1 no-underline black">
        Users
      </Link>
      <div className="ml1">|</div>
      <Link to="/logged-user" className="ml1 no-underline black">
        Logged User
      </Link>
      <div className="ml1">|</div>
      <Link to="/gardeners" className="ml1 no-underline black">
        Jardineiros
      </Link>
      <div className="ml1">|</div>
      <Link to="/gardener-details" className="ml1 no-underline black">
        Meu Perfil
      </Link>
    </div>
    <div className="flex flex-fixed">
      <Link to="/signup" className="ml1 no-underline black">
        Sign up
      </Link>
      <div className="ml1">|</div>
      <Link to="/login" className="ml1 no-underline black">
        Login
      </Link>
      <div className="ml1">|</div>
      <LogoutButton onLogout={() => props.history.push('/')} />
    </div>
  </div>
);

export default withRouter(Header);
