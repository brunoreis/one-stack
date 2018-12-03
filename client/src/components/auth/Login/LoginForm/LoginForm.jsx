import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import fetchLogin from '../../../../helpers/fetchLogin';

const LoginForm = (props) => {
  const {
    history,
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = () => {
    fetchLogin(email, password)
      .then(({ message, success }) => {
        if (success) history.push('/gardener-details');
        else setErrorMessage(message);
      });
  };

  return (
    <div>
      <input
        placeholder="Enter email"
        name="email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter password"
        name="password"
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => login({ ...props, email, setEmail })} type="button">Submit</button>
      <div>
        { errorMessage }
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
};

const LoginFormWithRouter = compose(
  withRouter,
)(LoginForm);

export default LoginFormWithRouter;
