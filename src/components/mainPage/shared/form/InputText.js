import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  text: {
    color: "#ffffff",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300,
    fontSize: "1rem",
    lineHeight: 1.65,
    appearance: "none",
    transition:
      "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out",
    backgroundColor: "transparent",
    borderRadius: "4px",
    border: "solid 1px #ffffff",
    display: "block",
    outline: "0",
    padding: "0 1rem",
    textDecoration: "none",
    width: "100%",
    height: "2.75rem",
    "&:invalid": {
      boxShadow: "none"
    },
    "&:focus": {
      background: "rgba(255, 255, 255, 0.075)",
      borderColor: "#ffffff",
      boxShadow: "0 0 0 1px #ffffff"
    }
  }
};

const formInput = props => {
  const { classes } = props;
  let className = "";

  switch (props.type) {
    case "text":
      className = classes.text;
      break;
    default:
      className = classes.text;
  }

  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={className}
    />
  );
};

export default withStyles(styles)(formInput);
