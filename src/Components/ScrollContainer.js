import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Home from "./Sections/Home_section";
import About from "./Sections/About_section";
import Skills from "./Sections/Skills_section";
import Portfolio from "./Sections/Portfolio_section";
import Grid from "@material-ui/core/Grid";
// import Link from "@material-ui/core/Link";
// import Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "./ScrollContainer.css";

// const ScrollLink = Scroll.ScrollLink;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  navbarStyle: {
    position: "fixed",
    background: "transparent",
    boxShadow: "none",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.navbarStyle}>
        <Toolbar>
          <Grid container xs={12}>
            <Grid container item xs={6}></Grid>
            <Grid
              container
              item
              spacing={5}
              justify="flex-end"
              alignItems="center"
              xs={6}
            >
              <Grid item>
                <Typography variant="h6">
                  <Link
                    activeClass="active"
                    to="home-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link
                    activeClass="active"
                    to="skills-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skills
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link
                    activeClass="active"
                    to="portfolio-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link
                    activeClass="active"
                    to="connect-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Connect
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* this next line normally separates the content beneath the navbar
          i got rid of it so the gradient will expand to the navbar when it is made to be transparent */}
      <Toolbar id="back-to-top-anchor" />
      <div
        style={{
          background: "linear-gradient(to left, #C9D6FF, #E2E2E2)",
        }}
      >
        <div class="container-fluid" style={{ border: "2px solid orange" }}>
          <div class="row justify-content-center">
            {/* <div class="col-auto" style={{ border: "2px solid red" }}></div> */}
            <div class="col" style={{ border: "2px solid yellow" }}>
              <Home />
            </div>
            {/* <div class="col-auto" style={{ border: "2px solid green" }}></div> */}
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <div class="container-fluid" style={{ border: "2px solid orange" }}>
          <div class="row justify-content-center">
            <div class="col" style={{ border: "2px solid yellow" }}>
              <About />
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <div class="container-fluid" style={{ border: "2px solid orange" }}>
          <div class="row justify-content-center">
            <div class="col" style={{ border: "2px solid yellow" }}>
              <Skills />
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
        <div class="container-fluid" style={{ border: "2px solid orange" }}>
          <div class="row justify-content-center">
            <div class="col" style={{ border: "2px solid yellow" }}>
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
      {/* <Grid>
        <Box>
          <Grid container item xs={1}></Grid>
          <Grid container item xs={10}>
            <Home />
          </Grid>
          <Grid container item xs={1}></Grid>
          <About />
          <Skills />
          <Portfolio />
        </Box>
      </Grid> */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
