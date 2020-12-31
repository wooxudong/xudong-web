import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { darkGreen, lightGrey } from '../../styles/colors';

const useStyles = makeStyles({
  container: {
    margin: '0.5rem 0',
    borderLeft: `6px solid ${darkGreen}`,
    padding: '0.5rem 0 0.5rem 1rem',
    fontSize: '1.4rem',
    fontWeight: 400,
    fontStretch: 'semi-expanded',
    lineHeight: '2.2rem',
    fontStyle: 'italic',
    background: lightGrey,
  },
});

export default ({ quote }) => {
  const classes = useStyles();
  return <div className={classes.container}>{quote}</div>;
};
