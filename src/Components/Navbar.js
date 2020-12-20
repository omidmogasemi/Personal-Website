import React, { useEffect } from "react";
import Navitem from "./Navitem"
import "./css/Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = ({ }) => {

    return (
        <div className="navbarcontainer">
            <div className="navbar">
                <Link activeClass="active" to="Home_section" spy={true} smooth={true} offset={-70}duration={500}>
                    <Navitem name="Home" section_id="Home_section"></Navitem>
                </Link>
                <Link activeClass="active" to="About_section" spy={true} smooth={true} offset={-70}duration={500}>
                    <Navitem name="About" section_id="About_section"></Navitem>
                </Link>
                <Link activeClass="active" to="Experience_section" spy={true} smooth={true} offset={-70}duration={500}>
                    <Navitem name="Experience" section_id="Experience_section"></Navitem>
                </Link>   
                <Link activeClass="active" to="Projects_section" spy={true} smooth={true} offset={-70}duration={500}>
                    <Navitem name="Projects" section_id="Connect_Modal"></Navitem>
                </Link>
            </div>
        </div>
    );

}

export default NavBar