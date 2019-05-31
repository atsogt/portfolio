import React, { Component } from "react";
import "../skills/skills.scss";
import ps from "../pics/photoshop.svg";
import ae from "../pics/ae.jpeg";
import ai from "../pics/ai.svg";
import pe from "../pics/pe.svg";
import ma from "../pics/maya.jpg";
import c from "../pics/code/css3.png";
import h from "../pics/code/html5.png";
import j from "../pics/code/js.png";
import react from "../pics/code/react.png";
import express from "../pics/code/express.png";
import redux from "../pics/code/redux.png";
import sql from "../pics/code/postgresql.png";
import node from "../pics/code/node.png";
import df from "../pics/code/df.png";
import ab from "../pics/code/ab.png";

export class skills extends Component {
  render() {
    return (
      <div className="skillsMainDiv">
        <div className="skillsDiv1">
          <div className="skillsDiv2">
            <img className="appPic" src={c} />
            <h1>CSS</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={h} /> <h1>HTML</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={j} /> <h1>JAVASCRIPT</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={react} /> <h1>REACT</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={express} /> <h1>EXPRESS</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={sql} /> <h1>POSTGRESQL</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={node} /> <h1>NODE.JS</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={redux} /> <h1>REDUX</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={ps} /> <h1>PHOTOSHOP</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={ae} /> <h2>AFTER EFFECTS</h2>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={ai} /> <h2>ILLUSTRATOR</h2>
          </div>
          {/* <div className="skillsDiv2">
            <img className="appPic" src={ab} /> <h2>BRIDGE</h2>
          </div> */}
          <div className="skillsDiv2">
            <img className="appPic" src={pe} /> <h2>PREMIER</h2>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={ma} /> <h1>MAYA</h1>
          </div>
          <div className="skillsDiv2">
            <img className="appPic" src={df} /> <h1>DRAGON FRAME</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default skills;
