import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  label: {
    padding: 0,
    border: 0,
    fontFamily: "'Source Sans Pro', sans-serif",
    verticalSlign: 'baseline',
    color: '#ffffff',
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 300,
    letterSpacing: '0.2rem',
    lineHeight: '1.5',
    margin: '0 0 1rem 0',
    textTransform: 'uppercase',
  },
};

const label = props => {
  const { classes } = props;
  return (
    <label htmlFor={props.htmlFor} className={classes.label}>
      {props.children}
    </label>
  );
};

export default withStyles(styles)(label);
