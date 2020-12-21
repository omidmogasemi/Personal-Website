import React from "react"
import "./css/Experience.css"
import hackdavis from "../img/hackdavis.png"; 

const ExperienceSection = (props) => {
  return (
    <div className="container-fluid p-0 experiencebackground">
      <div className={`row no-gutters align-items-center`}>
      <div className="col-10 offset-1" align="center">
          <h1 className="header">Experience</h1>
        </div>
        <div className={`col-sm-10 offset-sm-1 col-md-6 offset-md-3`}>
          <div className={`row no-gutters align-items-center`}>
            <div className="col-10 offset-1 projectinfo" align="center">
              <h3>HackDavis</h3>
              <h6>Technical Director</h6>
            </div>
            <div className="col-10 offset-1 projectinfo" align="center">
              <img className="projectfavicons" src="https://img.icons8.com/windows/32/000000/link.png"/>
              <img className="projectfavicons" src="https://img.icons8.com/ios/32/000000/github.png"/>
            </div>
            <div className={`col-sm-12 col-md-6`}>
              <img className="projectimage" src={hackdavis} />
            </div>
            <div className={`col-sm-12 col-md-6 projecttext`}>
              HackDavis is the first major collegiate hackathon at UC Davis completely run by students. We will have over 700 students, hackers and creatives come together for 24 hours of hacking in Winter 2021. We’re providing a platform to bring together the most talented students in California to address the world’s most pressing social issues.
            </div>
            <div className="col-10 offset-1 projectinfo" align="center">
              <img className="favicon" src="https://img.icons8.com/wired/32/000000/react.png"/>
              <img className="favicon" src="https://img.icons8.com/color/32/000000/google-firebase-console.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection