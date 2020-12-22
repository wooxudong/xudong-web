import React from 'react';
import Img from 'gatsby-image';

export default ({ sharp, fitStyle = 'cover' }) => {
  return sharp ? (
    <Img
      fluid={sharp.childImageSharp.fluid}
      imgStyle={{ objectFit: fitStyle }}
    />
  ) : null;
};
