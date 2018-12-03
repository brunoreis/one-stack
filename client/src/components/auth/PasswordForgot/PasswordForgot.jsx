import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import PASS_FORGOT_MUTATION from './PasswordForgotMutation';

const PasswordForgot = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const passwordForgotMutation = useMutation(
    PASS_FORGOT_MUTATION,
    {
      variables: {
        email,
      },
    },
  );
  const mutate = async () => {
    const r = await passwordForgotMutation();
    setMessage(r.data.passwordForgot.message);
  };

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
        <button onClick={mutate} type="button">Submit</button>
      </div>
      <div>
        { message }
      </div>
    </div>
  );
};

export default PasswordForgot;
