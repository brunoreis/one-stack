import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    
    const authToken = localStorage.getItem(AUTH_TOKEN);
    
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Catalogo Emater</div>
          <Link to="/" className="ml1 no-underline black">
            Manufacturer
          </Link>
          <div className="ml1">|</div>
          <Link to="/users" className="ml1 no-underline black">
            Users
          </Link>
          <div className="ml1">|</div>
          <Link to="/loggedUser" className="ml1 no-underline black">
            loggedUser
          </Link>
          {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/products" className="ml1 no-underline black">
              Products
            </Link>
          </div>
        )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
