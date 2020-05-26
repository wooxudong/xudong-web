import React from "react";
import ThemeChanger from "./homeIcon";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  navigation: {
    display: "flex",
    alignItems: "center",
    fontWeight: 300,
    "& a": {
      color: "#888",
      textDecoration: "none",
      margin: "0 8px 0",
      "&[aria-current]": {
        color: "#381696",
        fontWeight: 700
      },
      "&:hover": {
        color: "#381696"
      }
    },
    "&:last-child": {
      marginRight: 0
    }
  }
};

const Navigation = ({ classes }) => (
  <nav className={classes.navigation}>
    <ThemeChanger />
  </nav>
);

export default withStyles(styles)(Navigation);
