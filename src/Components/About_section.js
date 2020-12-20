import React from "react" 
import "./css/About.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const AboutSection = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className={`row no-gutters background`}>
        <div className={`col-10 offset-1`} align="middle">
          <h1 className="header">About</h1>
          <h3 className="name">Hi, I'm Omid.</h3>
        </div>
        <div className={`col-10 offset-1`} align="middle">
          
        </div>
      </div>
    </div>
  )
}

export default AboutSection