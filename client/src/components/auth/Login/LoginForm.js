import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    sendForm,
  } = props;
  return (
    <div>
      <input
        placeholder="Enter email"
        name="email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Enter password"
        name="password"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={sendForm} type="button">Submit</button>
      <div>
        { errorMessage }
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  sendForm: PropTypes.func.isRequired,
};

export default LoginForm;
