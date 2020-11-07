import React from "react";
import { makeStyles } from "@material-ui/styles";
import { graphql, useStaticQuery } from "gatsby";
import { get } from "loadsh";
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  avatar: {
    borderRadius: "50%",
    width: "5.5rem",
    height: "5.5rem",
    border: " solid 2px transparent",
    transform: "translate(-1px, -1px)",
    [theme.breakpoints.down("md")]: {
      width: "4.75rem",
      height: "4.75rem"
    }
  }
}));

function ImageAvatars() {
  const data = useStaticQuery(graphql`
    query AvatarImageQuery {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 84, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  const image = get(data, "file.childImageSharp.fluid", "");
  const classes = useStyles();
  return <Img fluid={image} className={classes.avatar} />;
}

export default ImageAvatars;
