import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TableauTemplate from '../tableauTemplate';

const useStyles = makeStyles({
  container: {
    padding: '1rem 1.5rem',
    border: '1px solid black',
    '& iframe': {
      margin: '0 auto',
    },
    overflow: 'auto',
  },
});

export default ({ url }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TableauTemplate url={url} className={classes.report} />
    </div>
  );
};
