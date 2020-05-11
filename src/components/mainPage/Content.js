import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "./Layout";

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
    <Layout>
      <div className={classes.main}>{children}</div>;
    </Layout>
  );
};

export default withStyles(styles)(Content);
