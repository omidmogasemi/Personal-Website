import React, { useState } from "react"
import Section from "./Section"
import NavBar from "./Navbar"
import AboutSection from "./About_section"
import ExperienceSection from "./Experience_section"
import SkillsSection from "./Skills_section"

function Layout() {
    return (
        <>
            <NavBar />
            <Section id="About_section">
                <AboutSection />
            </Section>
            <Section id="Skills_section">
                <SkillsSection />
            </Section>
            <Section id="Experience_section">
                <ExperienceSection />
            </Section>
        </>
    )
}

export default Layout