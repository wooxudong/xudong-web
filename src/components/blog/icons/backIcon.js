import React from "react";
import BackArrow from "../../../../static/image/icons/back.svg";
import { Link } from "gatsby";
import { blog } from "../../../contants/routes";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  backIcon: {
    position: 'fixed',
    top: '5rem',
    left: '5rem',
    width: '2rem',
    transition: 'transform .5s ease-in-out',
    '&:hover':{
      transform: 'scale(1.3) translateX(-0.5rem)',
    }
  }
};

const backIcon = ({ classes }) => (
  <Link to={blog} className={classes.backIcon}>
    <img alt="back icon" src={BackArrow} />
  </Link>
);

export default withStyles(styles)(backIcon);