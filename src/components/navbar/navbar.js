import React, { Component } from "react";
import "./../navbar/navbar.scss";
import { Link } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="Links" to="/">
          <button>HOME</button>
        </Link>
        <Link to="/about" className="Links">
          <button>BIO</button>
        </Link>
        <Link to="/skills" className="Links">
          <button>SKILLS</button>
        </Link>
        <Link to="/portfolio" className="Links">
          <button>PORTFOLIO</button>
        </Link>
        <Link to="/contact" className="Links">
          <button>CONTACT</button>
        </Link>
      </div>
    );
  }
}

export default navbar;
