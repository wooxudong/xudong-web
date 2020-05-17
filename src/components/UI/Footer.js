import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    animationName: 'opacity-fade-in',
    animationDuration: '1s',
    transition:
      'transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out',
    width: '100%',
    maxWidth: '100%',
    marginTop: '2rem',
    textAlign: 'center',
    display: 'block',
    fontSize: '100%',
    fontFamily: 'Source Sans Pro',
    verticalAlign: 'baseline',
    '& a': {
      textDecoration: 'none',
      transition:
        'color 0.2s ease-in-out, background-color 0.2s ease-in-out border-bottom-color 0.2s ease-in-out',
      color: 'inherit',
      borderBottom: 'dotted 1px rgba(255, 255, 255, 0.5)',
    },
  },
  copyright: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300,
    lineHeight: 1.65,
    letterSpacing: '0.2rem',
    fontSize: '0.6rem',
    opacity: 0.75,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
  '@keyframes opacity-fade-in': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  main: {
    color: '#ffffff',
  },
};

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <p className={`${classes.copyright} ${classes.main}`}>
      © {new Date().getFullYear()} Wu Xudong. All rights reserved.
    </p>
  </footer>
);

export default withStyles(styles)(Footer);
