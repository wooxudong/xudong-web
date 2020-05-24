import React from "react";
import Img from "gatsby-image";

export default ({ sharp }) => {
  return sharp ? <Img fluid={sharp.childImageSharp.fluid} /> : null;
};
