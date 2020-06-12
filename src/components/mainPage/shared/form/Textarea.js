import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  textarea: {
    appearance: "none",
    color: "#ffffff",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    lineHeight: 1.65,
    transition:
      "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out",
    backgroundColor: "transparent",
    borderRadius: "4px",
    border: "solid 1px #ffffff",
    display: "block",
    outline: 0,
    padding: "0 1rem",
    textDecoration: "none",
    width: "100%",
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

const textArea = props => {
  const { classes } = props;
  return (
    <textarea
      name={props.name}
      id={props.id}
      rows={props.rows}
      className={classes.textarea}
    />
  );
};

export default withStyles(styles)(textArea);
