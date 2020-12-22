import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: '0.5rem 0 0.5rem 0.5rem',
    '&:before': {
      height: '90%',
      content: "''",
      position: 'absolute',
      borderLeft: `6px solid ${theme.colors.mainGreen}`,
    },
  },
  description: {
    fontSize: '2.5rem',
    fontWeight: '200',
    paddingLeft: '1.5rem',
    position: 'relative',
    fontFamily: 'Zhi Mang Xing, cursive',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      paddingLeft: '1rem',
    },
  },
}));

export default ({ slogan }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.description}>{slogan}</div>
    </div>
  );
};
