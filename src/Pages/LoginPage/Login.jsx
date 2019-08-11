import React, { Component } from "react";

import Button from "../../common/Button/Button";

import mainBackground from "../../assets/blur_books.jpg";
import "./Login.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="Root">
        <div className="LoginSplash">
          <div className="slidingVertical">
            <span>LEARN</span>
          </div>
          <div className="LoginBox">
            <Button variant="primary"> Hello</Button>
          </div>
        </div>
        <img src={mainBackground} height="100%" />
      </div>
    );
  }
}

export default LoginPage;
