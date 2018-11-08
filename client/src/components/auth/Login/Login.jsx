import React from 'react';
import { Link } from 'react-router-dom';

import LoginFormContainer from './LoginForm/LoginFormContainer';

const Login = () => (
  <div>
    <LoginFormContainer />
    <Link to="/forgot" className="ml1 no-underline black">
        forgot my password
    </Link>
  </div>
);

export default Login;
