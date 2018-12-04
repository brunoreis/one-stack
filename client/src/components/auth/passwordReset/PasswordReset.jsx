import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import PropTypes from 'prop-types';

import PASS_RESET_MUTATION from './PasswordResetMutation';

const PasswordReset = (props) => {
  const token = props.match.params.token;
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const passwordResetMutation = useMutation(
    PASS_RESET_MUTATION,
    {
      variables: {
        token,
        password: newPassword,
      },
    },
  );
  const mutate = async () => {
    const r = await passwordResetMutation();
    setMessage(r.data.passwordReset.message);
  };

  return (
    <div>
      <input
        placeholder="Enter your new password"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
        value={newPassword}
      />
      <button onClick={mutate} type="button">Submit</button>
      <div>
        { message }
      </div>
    </div>
  );
};

PasswordReset.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PasswordReset;
