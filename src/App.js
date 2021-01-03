import React from "react";
import Section from "./Components/Section"
import NavBar from "./Components/Navbar"
import HomeSection from "./Components/Home_section"
import AboutSection from "./Components/About_section"
import ProjectsSection from "./Components/Projects_section"
import ExperienceSection from "./Components/Experience_section"
import "bootstrap/dist/css/bootstrap.css";
import "./Components/css/App.css"

function App() {
  return (
    <>
      <NavBar />
      <Section id="Home_section">
          <HomeSection />
      </Section>
      <div class="container-fluid">
        <div class="row">
          <Section id="About_section">
              <AboutSection />
          </Section>
          <Section id="Experience_section">
              <ExperienceSection />
          </Section>
          <Section id="Projects_section">
              <ProjectsSection />
          </Section>
        </div>
      </div>
    </>
  )};

export default App;
