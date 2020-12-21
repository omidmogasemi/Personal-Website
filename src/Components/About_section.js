import React from "react" 
import "./css/About.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import profilePhoto from "../img/omidsitephoto.jpg";

const AboutSection = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className={`row no-gutters align-items-center`}>
        <div className="col-10 offset-1" align="center">
          <h1 className="header">About</h1>
          <h3 className="name">Hi, I'm Omid.</h3>
        </div>
        <div className={`col-sm-10 offset-sm-1 col-md-6 offset-md-3`}>
          <div className={`row no-gutters`}>
            <div className={`col-3`} align="right">
              <img className="circle" src={profilePhoto} />
            </div>
            <div className={`col-9 biotext`}>
                I am a student at UC Davis studying Computer Science with plans to graduate in the Spring of 2022. I take passion in using my skills to enact social good and strive to make sure that I leave a lasting positive impact on the world. I am always open to new opportunities - please don't hesitate to reach out to me!  
            </div>
            <div className={`col-sm-12 col-md-6`}> 
              <h1 className="miniheader">Current Roles:</h1>
              <li className="biotext" style={{marginBottom: "1rem"}}>VP of Codelab (Sep 2020 - present)</li>
              <li className="biotext">Technical Director at HackDavis (Apr 2020 - present)</li>
            </div>
            <div className={`col-sm-12 col-md-6`}> 
              <h1 className="miniheader">Skills:</h1>
              <p className="biotext">In nearly three years, I have amassed a good amount of experience with web, mobile, and program development. Here are the languages and tools I have worked in and feel comfortable with as of today:</p>
              <p className="biotext">Languages:</p>
                <img src="https://img.icons8.com/color/72/000000/c-plus-plus-logo.png" className="spacedimages" onClick={() => window.open("https://www.cplusplus.com/")}/>
                <img src="https://img.icons8.com/color/72/000000/python.png" className="spacedimages" onClick={() => window.open("https://www.python.org/")}/>
                <img src="https://img.icons8.com/color/72/000000/javascript.png" className="spacedimages" onClick={() => window.open("https://www.javascript.com/")}/>
              <p className="biotext" style={{marginTop: "1rem"}}>Web Dev Tools:</p>
                <img src="https://img.icons8.com/officel/72/000000/react.png" className="nonspacedimages" onClick={() => window.open("https://reactjs.org/")}/>
                <img src="https://img.icons8.com/color/72/000000/nodejs.png" className="nonspacedimages" onClick={() => window.open("https://nodejs.dev/")}/>
                <img src="https://img.icons8.com/color/72/000000/material-ui.png" className="nonspacedimages" onClick={() => window.open("https://material-ui.com/")}/>
              <p className="biotext" style={{marginTop: "1rem"}}>Databsing (NoSQL):</p>
              <img src="https://img.icons8.com/color/72/000000/mongodb.png" className="spacedimages" onClick={() => window.open("https://www.mongodb.com/")}/>
                <img src="https://img.icons8.com/color/72/000000/firebase.png" className="spacedimages" onClick={() => window.open("https://firebase.google.com/")}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection