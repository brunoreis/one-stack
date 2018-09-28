import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../../../config';

class Logout extends Component {
  state = {
    fetching: true,
  }

  componentDidMount() {
    const apiUrl = config.getApiUrl();
    
    fetch(
      `${apiUrl}/logout`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    ).then(() => {
        this.setState({ fetching: false });
      }
    );
  }
  
  render() {

    return (
      this.state.fetching
      ? <div> fetching... </div>
      : <Redirect to="/" />
    );
  }
}

export default Logout;
