import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginFormContainer from './LoginForm/LoginFormContainer';

const Login = ({ onLoginSuccess }) => (
  <div>
    <LoginFormContainer onSuccess={onLoginSuccess} />
    <Link to="/forgot" className="ml1 no-underline black">
        forgot my password
    </Link>
  </div>
);

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
