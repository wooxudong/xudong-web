import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  image: {
    borderRadius: '4px',
    border: '0',
    position: 'relative',
    display: 'block',
    margin: '2.5rem 0',
    width: '100%',
    '&:before': {
      pointerEvents: 'none',
      backgroundImage: 'url("../../static/overlay.png")',
      backgroundColor: 'rgba(19, 21, 25, 0.5)',
      borderRadius: '4px',
      content: '""',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    '& img': {
      borderRadius: '4px',
      display: 'block',
      width: '100%',
    },
    '@media screen and (max-width: 960px)': {
      margin: '2rem 0',
    },
    '@media screen and (max-width: 600px)': {
      margin: '1.5rem 0',
    },
  },
};

const image = props => {
  const { classes } = props;
  return (
    <span className={classes.image}>
      <img src={props.pic} alt="" />
    </span>
  );
};

export default withStyles(styles)(image);
