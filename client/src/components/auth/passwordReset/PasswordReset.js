import React from 'react';
import PropTypes from 'prop-types';

const PasswordReset = (props) => {
  const {
    newPassword,
    setNewPassword,
    message,
    passwordResetMutate,
  } = props;

  return (
    <div>
      <input
        placeholder="Enter your new password"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
        value={newPassword}
      />
      <button onClick={passwordResetMutate} type="button">Submit</button>
      <div>
        { message }
      </div>
    </div>
  );
};

PasswordReset.propTypes = {
  newPassword: PropTypes.string.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  passwordResetMutate: PropTypes.func.isRequired,
};

export default PasswordReset;
