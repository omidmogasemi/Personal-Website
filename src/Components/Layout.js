import React, { useState } from "react"
import "./css/Layout.css"
import "bootstrap/dist/css/bootstrap.css";
import Section from "./Section"
import NavBar from "./Navbar"
import HomeSection from "./Home_section"
import AboutSection from "./About_section"
import ProjectsSection from "./Projects_section"
import ExperienceSection from "./Experience_section"

function Layout() {
    return (
        <>
            <NavBar />
                <Section id="Home_section">
                    <HomeSection />
                </Section>
            <div class="container-fluid">
                <Section id="About_section">
                    <AboutSection />
                </Section>
                <Section id="Projects_section">
                    <ProjectsSection />
                </Section>
                <Section id="Experience_section">
                    <ExperienceSection />
                </Section>
            </div>
        </>
    )
}

export default Layout