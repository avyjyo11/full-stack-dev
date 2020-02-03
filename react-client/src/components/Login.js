import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
//import axios from "axios";
import "../styles/Login.css";

class Login extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {!this.props.isLoggedIn ? (
            <Switch>
              <Route
                path="/login"
                render={props => (
                  <LoginForm
                    {...props}
                    getLoginState={this.props.getLoginState}
                  />
                )}
              />
              <Route path="/register" component={RegisterForm} />
            </Switch>
          ) : (
            <Redirect to="/main" />
          )}
        </div>
      </Router>
    );
  }
}

export default Login;
