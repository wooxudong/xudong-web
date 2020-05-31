import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "gatsby";

const styles = {
  modeContainer: {
    width: "1.5rem",
    height: " 1.5rem",
    marginLeft: "1.3rem"
  },
  sunIcon: {
    position: "relative",
    display: "block",
    transform: "scale(var(--ggs,1))",
    width: "24px",
    height: "24px",
    background: `
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 5px -6px/2px 6px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 5px 14px/2px 6px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat -8px 5px/6px 2px,
              linear-gradient(to bottom, currentColor 4px,transparent 0)
              no-repeat 14px 5px/6px 2px`,
    borderRadius: "100px",
    boxShadow: "inset 0 0 0 2px",
    border: "6px solid transparent",
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "24px",
      height: "2px",
      borderRight: "4px solid",
      borderLeft: "4px solid",
      left: "-6px",
      top: "5px"
    },
    "&:before": {
      transform: "rotate(-45deg)"
    },
    "&:after": {
      transform: "rotate(45deg)"
    },
    "&:hover": {
      cursor: "pointer"
    }
  }
};

const HomeIcon = ({ classes }) => (
  <Link className={classes.modeContainer} to={"/"}>
    <i className={classes.sunIcon} />
  </Link>
);
export default withStyles(styles)(HomeIcon);
