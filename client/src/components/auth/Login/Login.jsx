import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';

const Login = ({ setHeader }) => {
  setHeader('LOGIN');
  return (
    <div className="container">
      <LoginForm />
      <Link to="/forgot" className="ml1 no-underline black">
          forgot my password
      </Link>
    </div>
  );
};

Login.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default Login;
