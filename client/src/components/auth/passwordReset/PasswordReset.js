import React, { Component } from 'react';
import config from '../../../config';

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
        const apiUrl = config.getApiUrl();
        fetch(`${apiUrl}/reset/${token}`, // mudar para graphql
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
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
