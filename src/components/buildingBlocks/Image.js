import React from "react";
import Img from "gatsby-image";

export default ({ url, fluid }) => {
  return fluid ? <Img fluid={fluid} /> : <img src={url}  />;
};
