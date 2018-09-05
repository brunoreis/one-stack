import React, { Component } from 'react';

class ApiLogin extends Component {

    state = {
        username: '',
        password: '',
    }

    onSubmit = (event) => {
        const { username, password } = this.state;
        event.preventDefault();
        console.log('olá');
        console.log(username);
        console.log(password);
        fetch('http://localhost:4000/api-login',
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
        }).then(response => console.log(response));
    };

    render() {
        const { username, password } = this.state;

        return (
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
        )
    }
}

export default ApiLogin;
