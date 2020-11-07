import React from 'react';
import { withStyles } from '@material-ui/styles';
import { darkGreen, mainGreen } from '../styles/colors';

const styles = {
  button: {
    display: 'inline-block',
    minWidth: '8rem',
    backgroundColor: mainGreen,
    color: 'white',
    borderRadius: '10% / 50%',
    padding: '.4rem 1rem',
    fontWeight: 700,
    fontSize: '1rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: darkGreen,
      cursor: 'pointer',
    },
  },
};

const Tag = ({ classes, text, action }) => {
  const handleClick = (event) => {
    const value = event.currentTarget.textContent;
    action(value);
  };

  return (
    <div onClick={handleClick} className={classes.button}>
      {text}
    </div>
  );
};

export default withStyles(styles)(Tag);
