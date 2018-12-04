import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';

const Login = () => (
  <div>
    <LoginForm />
    <Link to="/forgot" className="ml1 no-underline black">
        forgot my password
    </Link>
  </div>
);

export default Login;
