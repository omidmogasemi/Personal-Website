import React from "react";
import { Element } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  textStyle: {
    marginTop: "3rem",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Element id="home-section" name="home-section" className={classes.root}>
        <Typography variant="h4" className={classes.textStyle}>
          This is Omid's home section!
        </Typography>
      </Element>
    </React.Fragment>
  );
}
