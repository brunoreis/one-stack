import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
  } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
