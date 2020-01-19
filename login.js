import React, { Component } from 'react';

class Login extends Component {

    state = {
        credentials: {
            username: ' ',
            password: ' '
        },
        isLoginView: true
    }
    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }
    login = event => {
        console.log(this.state.credentials);
        }
    toggleView = () => {
       this.setState ({isLoginView: !this.state.isLoginView})
    }

    render (){
        return <div className="login-container">
            <h1>
                { this.state.isLoginView ? 'Login' : 'Sign up' }
                </h1>
            <span>Username</span><br/>
            <input type="text" name="username" value={this.state.credentials.username}
                onChange={this.inputChanged}/><br/>
            <span>Password</span><br/>
                <input type="password" name="password" value={this.state.credentials.password}
                    onChange={this.inputChanged}/><br/>    
            <button onClick={this.login}>
            { this.state.isLoginView ? 'Login' : 'Sign up' }
            </button>
            <p onClick={this.toggleView}>
                { this.state.isLoginView ? 'Create Account' : 'back to Login' }    
            </p>
        </div>
    }
}

export default Login;