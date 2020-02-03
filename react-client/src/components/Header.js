import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="bg-dark mb-4">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <a href="/" className="navbar-brand">
              App
            </a>
            <ul className="navbar-nav">
              <li className="navbar-item pr-3">
                <a href="nav-link active">Link1</a>
              </li>
              <li className="navbar-item pr-3">
                <a href="nav-link">Link2</a>
              </li>
              <li className="navbar-item pr-3">
                <a href="nav-link">Link2</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
