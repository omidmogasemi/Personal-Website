import React from "react" 
import "./css/Skills.css";
import applicationdev from "../img/applicationdev.png";
import serverdev from "../img/serverdev.png";
import leadership from "../img/leadership.png";


const SkillsSection = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className={`row no-gutters align-items-center`}>
        <div className="col-10 offset-1 toptext" align="center">
          Skills
        </div>
        <div className={`col-sm-10 col-md-2 offset-xs-1 offset-md-2 focustext`} align="center">
          <img src={applicationdev} className="focusimage"></img>
          I spend the majority of my team creating applications, both on the web, mobile devices, and for computers. I've created several from start to finish which are outlined on the next page below using various technology stacks - both in a team and solo. <br /> 
          <img className="favicon" src="https://img.icons8.com/wired/64/000000/react.png"/>
          <img className="favicon" src="https://img.icons8.com/wired/64/000000/javascript-logo.png"/>
          <img className="favicon"src="https://img.icons8.com/wired/64/000000/android.png"/>
          <img className="favicon"src="https://img.icons8.com/wired/64/000000/python.png"/>
        </div>
        <div className={`col-sm-10 col-md-2 offset-xs-1 offset-md-1 focustext`} align="center">
          <img src={serverdev} className="focusimage"></img>
          Integrated within serveral of my applications I've worked on are databases I've also contributed to, again both in a solo and team environment. <br /> 
          <img className="favicon" src="https://img.icons8.com/color/64/000000/google-firebase-console.png"/>
          <img className="favicon"src="https://img.icons8.com/color/64/000000/mongodb.png"/>
        </div>
        <div className={`col-sm-10 col-md-2 offset-xs-1 offset-md-1 focustext`} align="center">
          <img src={leadership} className="focusimage"></img>
          I also play a key leadership role on several teams I participate in, both with leading development teams and providing mentorship and guidance to others, as well as creating and distributing educational material to lower division Computer Science students in an aim to teach them real-world technologies and frameworks. <br /> 
        </div>
      </div>
    </div>
  )
}

export default SkillsSection