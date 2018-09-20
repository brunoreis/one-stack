import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const PASS_FORGOT = gql`
  mutation PasswordForgot($email: String!) {
    passwordForgot (
        email: $email
    ) {
      message,
      success
    }
  }
`;

class PasswordForgot extends Component {

  state = {
      email: '',
      message: '',
  }

  render() {
    const { email, message } = this.state;
    return (
      <div>
        <Mutation mutation={PASS_FORGOT}>
          {(passwordForgot) => (
            <div>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  passwordForgot({ variables: { email } }).then(
                    r => this.setState({ message: r.data.passwordForgot.message })
                  );
                }}
              >
                <input
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <button type="submit">Send email</button>
              </form>
            </div>
          )}
        </Mutation>
        <div>
          { message }
        </div>
      </div>
    );
  };
}

export default PasswordForgot;
