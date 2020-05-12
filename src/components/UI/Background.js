import React from "react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import {graphql, useStaticQuery} from 'gatsby';

const useStyles = makeStyles({
  background: {
    transform: "scale(1)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 1,
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
      backgroundImage: props => `url(${props.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: 1
    }
  },
});

const Background = () => {
  const data = useStaticQuery(graphql`
    query BackgroundImageQuery {
      backgroundImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            src
          }
        }
      }
    }`);

  const classes = useStyles(data.backgroundImage.childImageSharp.fluid);

  return <div className={`${classes.background}`} />;
};

export default Background;
