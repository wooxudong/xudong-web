import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { graphql, useStaticQuery } from 'gatsby';
import { get } from 'loadsh';
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: '50%',
    border: ' solid 2px transparent',
    transform: 'translate(-1px, -1px)',
  },
  default: {
    width: '5.5rem',
    height: '5.5rem',
    [theme.breakpoints.down('md')]: {
      width: '4.75rem',
      height: '4.75rem',
    },
  },
  small: {
    width: '3rem',
    height: '3rem',
  },
}));

function ImageAvatars({ small = false }) {
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
  const image = get(data, 'file.childImageSharp.fluid', '');
  const classes = useStyles();
  const customStyle = small ? classes.small : classes.default;
  return <Img fluid={image} className={`${classes.avatar} ${customStyle}`} />;
}

export default ImageAvatars;
