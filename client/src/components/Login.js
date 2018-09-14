import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMessage: '',
        shouldRedirect: false,
    }

    onSubmit = (event) => {
        const { username, password } = this.state;
        event.preventDefault();
        // const apiBaseUrl = config.get('API_BASE_URL');
        const baseUrl = process.env.REACT_APP_ENV === 'prod'
            ? process.env.REACT_APP_PROD_URL
            : process.env.REACT_APP_DEV_URL;
        fetch(`${baseUrl}/login`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(response => {
            if (response.status === 200){
                this.setState({ shouldRedirect: true });
            }
            else {
                response.json().then(resJson => {
                    this.setState({ errorMessage: resJson.errorMessage });
                });
            }
        });
    };

    render() {
        const { username, password, errorMessage, shouldRedirect } = this.state;
        // if do redirect
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
                <Link to="/forgot" className="ml1 no-underline black">
                    forgot my password
                </Link>
                <div>
                    { errorMessage }
                </div>
                { shouldRedirect && <Redirect to='/loggedUser' /> }
            </div>
        )
    }
}

export default Login;
