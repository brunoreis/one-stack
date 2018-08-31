import React, { Component } from 'react';

// class Login extends Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     for (var pair of data.entries()) {
//       console.log(pair[0]+ ', ' + pair[1]); 
//   }
//     fetch('http://localhost:4000/login', {
//     // fetch('http://192.168.2.35/', {
//       method: 'POST',
//       body: data,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Enter username</label>
//         <input id="username" name="username" type="text" />

//         <label htmlFor="password">Enter your password</label>
//         <input id="password" name="password" type="text" />

//         <button>Send data!</button>
//       </form>
//     );
//   }
// }

class Login extends Component
{
    render() {
        return(
            <div>
                <form method="post" action="http://localhost:4000/login">
                    Username:<br/>
                    <input type="text" name="username"/><br/>
                    Password:<br/>
                    <input type="password" name="password"/><br/>
                    <input type="submit" value="Register"/>
                </form>
             </div>
        );
    }
}

export default Login;
