import React, { Component } from 'react';
import fetchLogin from './fetchLogin';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: '',
    shouldRedirect: false,
  }

  onSubmit = async (event) => {
    let result = await fetchLogin(event);
    this.props.setResult(result);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit = { this.onSubmit }>
            <label htmlFor="email">Enter email</label>
            <input 
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                    this.setState({ email: e.target.value });
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