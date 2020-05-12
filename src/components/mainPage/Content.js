import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    maxWidth: "100%",
    zIndex: 3
  }
};

const Content = ({ classes, children }) => {
  return (
      <div className={classes.main}>{children}</div>
  );
};

export default withStyles(styles)(Content);
