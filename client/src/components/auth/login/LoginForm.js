import React, { Component } from 'react';
import fetchLogin from './fetchLogin';

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    errorMessage: '',
    shouldRedirect: false,
  }

  onSubmit = async (event) => {
    let result = await fetchLogin(event);
    this.props.setResult(result);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit = { this.onSubmit }>
            <label htmlFor="username">Enter username</label>
            <input 
                name="username"
                type="text"
                value={username}
                onChange={(e) => {
                    this.setState({ username: e.target.value });
                }}
            />
            <label htmlFor="password">Enter your password</label>
            <input
                name="password"
                type="text"
                value={password}
                onChange={(e) => {
                    this.setState({ password: e.target.value });
                }}
            />

            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;