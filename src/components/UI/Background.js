import React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  background: {
    transform: "scale(1)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 1,
    animationName: "$background-fade-in",
    animationDuration: "1s",
    transition: "all 1s ease-in-out ",
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    "&:before": {
      backgroundImage: `linear-gradient(
        to top,
        rgba(19, 21, 25, 0.5),
        rgba(19, 21, 25, 0.5)
      )`,
      backgroundSize: "auto, 256px 256px",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat, repeat",
      zIndex: 2
    },
    "&:after": {
      animationFillMode: "forwards",
      transform: "scale(1.125)",
      backgroundImage: props => `url(${props.image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: 1
    }
  },
  "@keyframes background-fade-in": {
    "0%": {
      filter: "blur(0.5rem)",
      opacity: 0.2
    },
    "100%": {
      filter: "none",
      opacity: 1
    }
  }
});

const Background = props => {
  const classes = useStyles(props);
  return <div className={`${classes.background}`} />;
};

export default Background;
