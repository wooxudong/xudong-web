import React from "react";
import Img from "gatsby-image";

export default ({ sharp, image }) => {
  return sharp ? <Img fluid={sharp.childImageSharp.fluid} /> : <img src={image.url}  />;
};
