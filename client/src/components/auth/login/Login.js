import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

class Login extends Component {
    state = {
        errorMessage: '',
        shouldRedirect: false,
    }

    setResult = (fetchResult) => {
        this.setState ({
            shouldRedirect: fetchResult.success,
            errorMessage: fetchResult.message,
        })
    }

    render() {
        const { errorMessage, shouldRedirect } = this.state;
        // if do redirect
        return (
            shouldRedirect
            ? <Redirect to='/loggedUser' />
            : <div>
                <LoginForm setResult = {this.setResult} />
                <div>
                    { errorMessage }
                </div>
                <Link to="/forgot" className="ml1 no-underline black">
                    forgot my password
                </Link>
            </div>
        )
    }
}

export default Login;
