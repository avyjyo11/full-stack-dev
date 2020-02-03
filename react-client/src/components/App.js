import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//import Header from "./Header";
import Main from "./Main";
import Login from "./Login";

import "../styles/App.css";

// function withHeaderFooter(Component) {
//   return function(props) {
//     return (
//       <div className="App">
//         <Header />
//         <Main {...props} />
//       </div>
//     );
//   };
// }

// function withAuth(Component) {
//   return function({ path, isLoggedIn, ...props }) {
//     return isLoggedIn === true ? (
//       <Route path={path} render={props => <Component {...props} />} />
//     ) : (
//       <Redirect to="/login" />
//     );
//   };
// }

//const ProtectedMain = withAuth(withHeaderFooter(Main));

const PrivateRoute = ({ path, component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      path={path}
      render={props =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  getLoginState = state => {
    this.setState({
      isLoggedIn: state
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <PrivateRoute
            path="/main"
            isLoggedIn={this.state.isLoggedIn}
            component={Main}
          />
          <Route path="/login">
            <Login
              getLoginState={this.getLoginState}
              isLoggedIn={this.state.isLoggedIn}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
