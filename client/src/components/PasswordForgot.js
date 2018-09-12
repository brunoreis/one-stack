import React, { Component } from 'react';

class PasswordForgot extends Component {

    state = {
        email: '',
    }

    onSubmit = (event) => {
        const { email } = this.state;
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_ENV === 'prod'
            ? process.env.REACT_APP_PROD_URL
            : process.env.REACT_APP_DEV_URL;
        fetch(`${baseUrl}/forgot`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // credentials: 'include',
            body: JSON.stringify({
                email,
            }),
        }).then(response => console.log(response));
    };

    render() {
        const { email } = this.state;

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
            </div>
        )
    }
}

export default PasswordForgot;
