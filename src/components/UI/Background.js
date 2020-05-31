import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100vh",
    zIndex: 1
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    "&:before": {
      content: '""',
      display: "block",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 2,
      position: "absolute",
      backgroundImage: `linear-gradient(
        to top,
        rgba(19, 21, 25, 0.5),
        rgba(19, 21, 25, 0.5)
      )`,
      backgroundSize: "auto, 256px 256px",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat, repeat"
    }
  }
};

const Background = ({ classes }) => {
  const data = useStaticQuery(graphql`
    query BackgroundImageQuery {
      file(relativePath: { eq: "background-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={classes.overlay}>
      <Img fluid={data.file.childImageSharp.fluid} className={classes.image} />
    </div>
  );
};

export default withStyles(styles)(Background);
