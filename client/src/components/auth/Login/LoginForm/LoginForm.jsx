import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { flowRight as compose } from 'lodash';
import { withRouter } from 'react-router';

import fetchLogin from '../../../../helpers/fetchLogin';
import validator from './LoginFormValidator';

const LoginForm = (props) => {
  const {
    history,
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const validateAndLogin = async () => {
    const newValidation = validator.validate({
      email,
      password,
    });
    if (newValidation.isValid) {
      const { success, message } = await fetchLogin(email, password);
      if (success) {
        history.push('/');
      } else {
        setErrorMessage(message);
        setValidation(newValidation);
      }
    } else setValidation(newValidation);
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {validation.email.isInvalid
          && (
          <div className="text-danger">
            {validation.email.message}
          </div>
          )}
        </div>
        <div className="form-group col-6">
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {validation.password.isInvalid
          && (
          <div className="text-danger">
            {validation.password.message}
          </div>
          )}
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        name="login-button"
        onClick={validateAndLogin}
      >
        Submit
      </button>
      <div className="text-danger my-1">
        { errorMessage }
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
};

const LoginFormWithRouter = compose(
  withRouter,
)(LoginForm);

export default LoginFormWithRouter;
