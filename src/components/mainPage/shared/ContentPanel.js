import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";

const styles = {
  close: {
    display: "block",
    position: "absolute",
    top: "0",
    right: "0",
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
    textIndent: "4rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderBottom: "none",
    "&:before": {
      transition: "background-color 0.2s ease-in-out",
      content: '""',
      display: "block",
      position: "absolute",
      top: "0.75rem",
      left: "0.75rem",
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "100%",
      backgroundPosition: "center",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E\")",
      backgroundSize: "20px 20px",
      backgroundRepeat: "no-repeat"
    },
    "&:hover:before": {
      backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
    "&:active:before": {
      backgroundColor: "rgba(255, 255, 255, 0.175)"
    },
    "@media screen and (max-width: 960px)": {
      "&:before": {
        top: "0.875rem",
        left: "0.875rem",
        width: "2.25rem",
        height: "2.25rem",
        backgroundSize: "14px 14px"
      }
    }
  },
  "@keyframes Fade-In": {
    "0%": {
      opacity: "0",
      transform: "translateY(0.25rem)"
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)"
    }
  },
  article: {
    padding: "4.5rem 2.5rem 1.5rem 2.5rem",
    position: "relative",
    width: "40rem",
    maxWidth: "100%",
    backgroundColor: "rgba(27, 31, 34, 0.85)",
    borderRadius: "4px",
    animationName: "Fade-In",
    animationDuration: "1s",
    "& h2": {
      color: "#ffffff",
      fontWeight: 600,
      lineHeight: 1.5,
      margin: "0 0 1rem 0",
      textTransform: "uppercase",
      letterSpacing: "0.2rem"
    },

    "@media screen and (max-width: 960px)": {
      "&": {
        padding: "3.5rem 2rem 0.5rem 2rem"
      }
    },

    "@media screen and (max-width: 600px)": {
      "&": {
        padding: "3rem 1.5rem 0.5rem 1.5rem"
      }
    }
  },
  major: {
    borderBottom: "solid 1px #ffffff",
    width: "max-content",
    paddingBottom: "0.5rem",
    margin: "0 0 2rem 0",
    fontSize: "1.5rem",
    lineHeight: "1.4",
    letterSpacing: "0.5rem",
    color: "#ffffff",
    fontFamily: "'Source Sans Pro', sans-serif"
  }
};

const ContentPanel = props => {
  const { classes } = props;

  const fadeOut = () => {
    setTimeout(() => {
      navigate("/");
    }, 250);
  };

  return (
    <article id={props.id} className={classes.article}>
      <h2 className={classes.major}>{props.title}</h2>
      {props.children}
      <span className={classes.close} onClick={fadeOut} />
    </article>
  );
};

export default withStyles(styles)(ContentPanel);
