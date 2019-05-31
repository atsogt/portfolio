import React, { Component } from "react";
import "./../about/bio.scss";
export class about extends Component {
  render() {
    return (
      <div className="aboutMainDiv">
        <div className="aboutDiv1">
          <h1>About Me</h1>
          <p className="line" />
          <div className="aboutDiv2">
            <h2>
              I love to design, create interactive apps, and animate. To pursue
              my technical skills, I committed to the Web Development Program at
              DevMountain where I learned to create full stack applications from
              ground up.{" "}
            </h2>
            <h2>
              I graduated from School of the Art Institute of Chicago with a
              focus on Film and Animation.
            </h2>
            <h2>
              Outside of work, I love to read, watch films, and go to museums.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
