import React from 'react';
import PropTypes from 'prop-types';

const PasswordForgot = (props) => {
  const {
    email,
    setEmail,
    message,
    passwordForgotMutate,
  } = props;

  return (
    <div>
      <div>
        <input
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <button onClick={passwordForgotMutate} type="button">Submit</button>
      </div>
      <div>
        { message }
      </div>
    </div>
  );
};

PasswordForgot.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  passwordForgotMutate: PropTypes.func.isRequired,
};

export default PasswordForgot;
