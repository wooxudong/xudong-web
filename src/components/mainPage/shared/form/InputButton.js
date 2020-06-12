import React from "react";
import { withStyles } from "@material-ui/styles";

const sharedStyles = {
  appearance: "none",
  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  backgroundColor: "transparent",
  borderRadius: "4px",
  border: 0,
  boxShadow: "inset 0 0 0 1px #ffffff",
  color: "#ffffff",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "0.8rem",
  fontWeight: "300",
  height: "2.75rem",
  letterSpacing: "0.2rem",
  outline: 0,
  padding: "0 1.25rem 0 1.35rem",
  textAlign: "center",
  textDecoration: "none",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: "calc(2.75rem - 2px)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.075)"
  },
  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 0.175)"
  }
};

const styles = {
  button: { ...sharedStyles },
  small: {
    fontSize: "0.6rem",
    height: "2.0625rem",
    lineHeight: "2.0625rem"
  },
  primary: {
    backgroundColor: "#ffffff",
    color: "#1b1f22 !important",
    fontWeight: "600"
  },
  disabled: {
    pointerEvents: "none",
    cursor: "default",
    opacity: "0.25"
  }
};

const inputButton = props => {
  const { classes } = props;
  let additionClass = "";
  switch (props.addtionStyle) {
    case "primary":
      additionClass = classes.primary;
      break;
    case "small":
      additionClass = classes.small;
      break;
    case "disabled":
      additionClass = classes.disabled;
      break;
    default:
      additionClass = "";
  }
  return (
    <input
      type={props.type}
      value={props.value}
      className={`${classes.button} ${additionClass}`}
    />
  );
};

export default withStyles(styles)(inputButton);
