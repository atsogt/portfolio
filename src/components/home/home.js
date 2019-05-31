import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import logo from "./../pics/logo.png";

export class home extends Component {
  render() {
    return (
      <div>
        <div className="mainDiv">
          <div className="subDiv">
            <h1>Anand Tsogtbaatar</h1>
            <p className="line" />
            <h2>Front End Developer</h2>
            <h2>Animator</h2>
            <h2>Designer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
