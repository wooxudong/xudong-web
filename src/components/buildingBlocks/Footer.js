import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    textAlign: 'center',
    margin: '5.5rem 0 1rem',
    color: '#666',
  },
});
export default () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>&copy; {new Date().getFullYear()} Wu Xudong. All Rights Reserved.</p>
    </footer>
  );
};
