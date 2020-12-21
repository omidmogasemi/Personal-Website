import React from "react" 
import "./css/Home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link, animateScroll as scroll } from "react-scroll";

const HomeSection = (props) => {
  return (
    <div className="backgroundimage">
      <div className="container-fluid p-0 backgroundimage">
        <div className={`row no-gutters align-items-center background`}>
          <div className={`col-sm-8 offset-sm-2 col-lg-10 offset-lg-1 text_container`}>
            <h1 className="typedtext">Omid Mogasemi</h1>
            <body1 className="abouttext">Software Engineer | Founder | Do-Gooder</body1> <br /> 
            <img src="https://img.icons8.com/windows/56/000000/email-open.png" className="spacedimages" onClick={() => window.open("mailto:omidmogasemi@gmail.com")}/>
            <img src="https://img.icons8.com/metro/36/000000/linkedin.png" className="spacedimages" onClick={() => window.open("https://www.linkedin.com/in/omidmogasemi/")}/>
            <img src="https://img.icons8.com/material-outlined/56/000000/github.png" onClick={() => window.open("https://github.com/omidmogasemi")}/>
          </div>
          <div className="start_button_container">
              <Link activeClass="active" to="About_section" spy={true} smooth={true} offset={-70}duration={500}>
                  <div className="start_button_button">
                      <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 2L10 10L18 2" stroke="white" strokeWidth="3"/>
                      </svg>
                  </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection