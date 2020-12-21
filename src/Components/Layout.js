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
            <div class="container-fluid">
                <div class="row">
                    <NavBar />
            <Section id="Home_section">
                <HomeSection />
            </Section>
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
    )
}

export default Layout