import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <form method="post" action="http://localhost:4000/login">
          Username:
          <br />
          <input type="text" name="username" />
          <br />
            Password:
          <br />
          <input type="password" name="password" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Login;
