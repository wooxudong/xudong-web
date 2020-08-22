import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { mainGreen } from '../styles/colors';
import { Link } from 'gatsby';
import BackArrow from '../../../static/image/icons/back.svg';

const useStyles = makeStyles((theme) => ({
  backArrow: {
    position: 'absolute',
    right: '0',
    display: 'block',
    height: '1.5rem',
    width: '0',
    transition: 'width .5s ease-in-out',
    marginRight: '1rem',
    [theme.breakpoints.down('md')]: {
      tansform: 'translate(-6rem, -.2rem)',
    },
    transform: 'translate(-15rem, .5rem) scale(1.5)',
  },
  backToHome: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.fonts.small,
    },
    position: 'relative',
    fontSize: theme.fonts.big,
    width: '3rem',
    height: '2rem',
    color: `${mainGreen}`,
    textDecoration: 'none',
    padding: '2px',
    '&:hover': {
      '& $backArrow': {
        width: '2rem',
      },
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <Link className={classes.backToHome} to={'/'}>
      <img alt="back icon" src={BackArrow} className={classes.backArrow} />
      <span>BACK TO HOME</span>
    </Link>
  );
};

export default Navigation;
