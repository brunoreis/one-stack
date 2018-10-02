import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginFormContainer from './LoginFormContainer';

const Login = (props) => {
  const {
    errorMessage,
    shouldRedirect,
    setResult,
  } = props;

  return (
    shouldRedirect
      ? <Redirect to="/loggedUser" />
      : (
        <div>
          <LoginFormContainer setResult={setResult} />
          <div>
            { errorMessage }
          </div>
          <Link to="/forgot" className="ml1 no-underline black">
              forgot my password
          </Link>
        </div>
      )
  );
};

Login.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  setResult: PropTypes.func.isRequired,
};

export default Login;
