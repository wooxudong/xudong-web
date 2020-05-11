import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paragraph: {
    color: "#ffffff",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300,
    fontSize: "1rem",
    lineHeight: 1.65,
    margin: "0 0 2rem 0",
    "& a": {
      color: "inherit",
      borderBottom: "dotted 1px rgba(255, 255, 255, 0.5)",
      textDecoration: "none",
      "&:hover": {
        borderBottomColor: "transparent"
      }
    }
  }
};

const paragraph = props => {
  const { classes } = props;
  return <p className={classes.paragraph}>{props.children}</p>;
};

export default withStyles(styles)(paragraph);
