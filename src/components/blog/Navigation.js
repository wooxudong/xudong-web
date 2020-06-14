import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { mainGreen } from "../styles/colors";
import { Link } from "gatsby";
import BackArrow from "../../../static/image/icons/back.svg";

const styles = {
  backArrow: {
    position:"absolute",
    right:'0',
    display:'block',
    height: '1.5rem',
    width: "0",
    transition: "width .5s ease-in-out",
    marginRight: "1rem",
    transform: "translate(-6rem, -.2rem)"
  },
  backToHome: {
    position: 'relative',
    width: "3rem",
    height: "2rem",
    borderRadius: "5px",
    color: `${mainGreen}`,
    textAlign: "center",
    textDecoration: "none",
    padding: "2px",
    transition: "border .5s ease-in-out",
    "&:hover": {
      "& $backArrow": {
        width: "2rem"
      }
    }
  }
};

const Navigation = ({ classes }) => (
  <Link className={classes.backToHome} to={"/"}>
    <img alt="back icon" src={BackArrow} className={classes.backArrow} />
    <strong>Back to home</strong>
  </Link>
);

export default withStyles(styles)(Navigation);
