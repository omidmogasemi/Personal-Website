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

// const ScrollLink = Scroll.ScrollLink;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
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
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          <Home />
          <About />
          <Skills />
          <Portfolio />
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
