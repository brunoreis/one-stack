import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Logout from './auth/Logout/Logout';

const Header = props => (
  <div className="flex pa1 justify-between nowrap orange">
    <div className="flex flex-fixed black">
      <div className="fw7 mr1">Catalogo Emater</div>
      <Link to="/products" className="ml1 no-underline black">
        Products
      </Link>
      <div className="ml1">|</div>
      <Link to="/" className="ml1 no-underline black">
        Manufacturer
      </Link>
      <div className="ml1">|</div>
      <Link to="/users" className="ml1 no-underline black">
        Users
      </Link>
      <div className="ml1">|</div>
      <Link to="/loggedUser" className="ml1 no-underline black">
        loggedUser
      </Link>
    </div>
    <div className="flex flex-fixed">
      <Link to="/login" className="ml1 no-underline black">
        Login
      </Link>
      <div className="ml1">|</div>
      <button onClick={() => Logout(props)} type="button">
        Logout
      </button>
    </div>
  </div>
);

export default withRouter(Header);
