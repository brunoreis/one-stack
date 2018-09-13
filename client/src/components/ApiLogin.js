import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ApiLogin extends Component {

    state = {
        username: '',
        password: '',
        message: '',
        loggedIn: false,
    }

    onSubmit = (event) => {
        const { username, password, message, loggedIn } = this.state;
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_ENV === 'prod'
            ? process.env.REACT_APP_PROD_URL
            : process.env.REACT_APP_DEV_URL;
        fetch(`${baseUrl}/api-login`,
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
                this.setState({ loggedIn: true });
            }
            else {
                response.json().then(resJson => {
                    this.setState({ message: resJson.message });
                });
            }
        });
    };

    render() {
        const { username, password, message, loggedIn } = this.state;
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
                    { message }
                </div>
                { loggedIn && <Redirect to='/loggedUser' /> }
            </div>
        )
    }
}

export default ApiLogin;
