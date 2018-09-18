import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const PASS_RESET = gql`
  mutation PasswordReset(
    $token: String!,
    $password: String!) {
    passwordReset (
        token: $token,
        password: $password
    ) {
      message,
      success
    }
  }
`;

class PasswordReset extends Component {

  state = {
    password: '',
    token: '',
    message: '',
  }

  componentDidMount () {
    this.setState({ token: this.props.match.params.token })
  }


  render() {
    const { token, password, message } = this.state;

    return (
      <div>
        <Mutation mutation={PASS_RESET}>
          {(passwordReset) => (
            <form
              onSubmit = { async (e) => {
                e.preventDefault();
                passwordReset({
                  variables: {
                    token,
                    password
                  }
                }).then(
                  r => this.setState({ message: r.data.passwordReset.message })
                );
              }}
            >
              <input
                placeholder="Enter your new password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </Mutation>
        <div>
          { message }
        </div>
      </div>
    )
  }
}

export default PasswordReset;
