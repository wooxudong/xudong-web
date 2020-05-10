import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import overlayPic from '../../../static/overlay.png';
import bgPic from '../../../static/background.jpg';

const styles = {
  background: {
    transform: 'scale(1)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 1,
    animationName: 'background-fade-in',
    animationDuration: '1.5s',
    transition: 'all 1s ease-in-out ',
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    '&:before': {
      backgroundImage: `linear-gradient(
        to top,
        rgba(19, 21, 25, 0.5),
        rgba(19, 21, 25, 0.5)
      ),
      url('${overlayPic}')`,
      backgroundSize: 'auto, 256px 256px',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, repeat',
      zIndex: 2,
    },
    '&:after': {
      animationFillMode: 'forwards',
      transform: 'scale(1.125)',
      backgroundImage: `url(${bgPic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: 1,
    },
  },
  '@keyframes background-fade-in': {
    '0%': {
      filter: 'blur(0.5rem)',
      opacity: 0.2,
    },
    '100%': {
      filter: 'none',
      opacity: 1,
    },
  },
  fadeOut: {
    filter: 'blur(0.8rem)',
  },
};

const background = ({ classes }) => {
  return <div className={`${classes.background} ${classes.fadeOut}`} />;
};

export default withStyles(styles)(background);
