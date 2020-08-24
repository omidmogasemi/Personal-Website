import React from "react";
import { Element } from "react-scroll";

export default function About() {
  return (
    <React.Fragment>
      <Element
        id="about-section"
        name="about-section"
        style={{ height: "100vh" }}
      >
        This is the about section!
      </Element>
    </React.Fragment>
  );
}
