import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    padding: "0.5rem 1rem",
    "&:before": {
      height: "130%",
      content: "''",
      position: "absolute",
      borderLeft: `1px solid ${theme.colors.mainGreen}`,
    },
    "&:after": {
      width: "60%",
      content: "''",
      position: "absolute",
      borderBottom: `1px solid ${theme.colors.mainGreen}`,
      transform: "translate(-3rem, 1rem)",
    },
  },
  description: {
    fontSize: "2.5rem",
    fontWeight: "200",
    padding: "0 1.5rem",
    position: "relative",
    fontFamily: "Zhi Mang Xing, cursive",
  },
}));

export default ({ slogan }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.description}>{slogan}</div>
    </div>
  );
};
