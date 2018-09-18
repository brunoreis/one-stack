import React, { Component } from 'react';
import config from '../../../config';

class PasswordForgot extends Component {

    state = {
        email: '',
        message: '',
    }

    onSubmit = (event) => {
        const { email } = this.state;
        event.preventDefault();
        const apiUrl = config.getApiUrl();
        fetch(`${apiUrl}/forgot`, // mudar pra graphql
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            }),
        }).then(response => {
            response.json().then(resJson => {
                this.setState({ message: resJson.message });
            });
        });
    };

    render() {
        const { email, message } = this.state;

        return (
            <div>
                <form onSubmit = { this.onSubmit }>
                    <label htmlFor="email">Enter email </label>
                    <input 
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />

                    <button type="submit">Submit</button>
                </form>
                <div>
                    { message }
                </div>
            </div>
        )
    }
}

export default PasswordForgot;
