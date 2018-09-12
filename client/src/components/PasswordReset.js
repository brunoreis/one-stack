import React, { Component } from 'react';

class PasswordReset extends Component {

    state = {
        email: '',
        password: '',
        token: '',
    }

    componentDidMount () {
      this.setState({ token: this.props.match.params.token })
    }

    onSubmit = (event) => {
        const { email, password, token } = this.state;
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_ENV === 'prod'
            ? process.env.REACT_APP_PROD_URL
            : process.env.REACT_APP_DEV_URL;
        fetch(`${baseUrl}/reset/${token}`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        }).then(response => console.log(response));
    };

    render() {
        const { email, password } = this.state;

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
                    <label htmlFor="password">Enter your new password</label>
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
        )
    }
}

export default PasswordReset;
