import React, { Component } from 'react';

class PasswordReset extends Component {

    state = {
        password: '',
        token: '',
        message: '',
    }

    componentDidMount () {
      this.setState({ token: this.props.match.params.token })
    }

    onSubmit = (event) => {
        const { password, token } = this.state;
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
                password,
            }),
        }).then(response => {
            response.json().then(resJson => {
                this.setState({ message: resJson.message });
            });
        });
    };

    render() {
        const { password, message } = this.state;

        return (
            <div>
                <form onSubmit = { this.onSubmit }>
                    <label htmlFor="password">Enter your new password </label>
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
                <div>
                    { message }
                </div>
            </div>
        )
    }
}

export default PasswordReset;
