import React from "react";
import { withStyles } from "@material-ui/styles";
import { darkGreen, mainGreen } from "../styles/colors";

const styles = {
  button: {
    display: "inline-block",
    minWidth: "8rem",
    backgroundColor: mainGreen,
    color: "white",
    borderRadius: "10% / 50%",
    padding: ".4rem 1rem",
    fontWeight: 700,
    fontSize: "1rem",
    textAlign: "center",
    textTransform: "capitalize",
    outline: "none",
    "&:hover": {
      backgroundColor: darkGreen,
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: darkGreen,
      cursor: "pointer"
    }
  }
};

const Button = ({ classes, text, action }) => {
  const handleClick = event => {
    const value = event.currentTarget.textContent;
    action(value);
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      {text}
    </button>
  );
};

export default withStyles(styles)(Button);
