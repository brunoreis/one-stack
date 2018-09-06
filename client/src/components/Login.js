import React, { Component } from 'react';

class Login extends Component {
  render() {
    const baseUrl = process.env.REACT_APP_ENV === 'prod'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_PROD_URL;
    const url = `https://${baseUrl}/login`;

    return (
      <div>
        <form method="post" action={url}>
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
