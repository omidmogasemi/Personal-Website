import React from "react";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <React.Fragment>
      <Element
        id="home-section"
        name="home-section"
        style={{ height: "100vh" }}
      >
        This is Omid's home section!
      </Element>
    </React.Fragment>
  );
}
