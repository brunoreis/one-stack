import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginFormContainer from './LoginFormContainer';

const Login = (props) => {
  const {
    afterFetch,
  } = props;

  return (
    <div>
      <LoginFormContainer onSuccess={afterFetch} />
      <Link to="/forgot" className="ml1 no-underline black">
          forgot my password
      </Link>
    </div>
  );
};

Login.propTypes = {
  afterFetch: PropTypes.func.isRequired,
};

export default Login;
