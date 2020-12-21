import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';
import BackArrow from '../../../static/image/icons/back.svg';

const useStyles = makeStyles((theme) => ({
  backArrow: {
    position: 'absolute',
    right: '0',
    display: 'block',
    height: '1.5rem',
    width: '0',
    '& svg path': {
      fill: 'black',
    },
    transition: 'width .5s ease-in-out',
    marginRight: '1rem',
    [theme.breakpoints.down('md')]: {
      tansform: 'translate(-6rem, -.2rem)',
    },
    transform: 'translate(-16rem, .5rem) scale(1.5)',
  },
  backToHome: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.fonts.small,
    },
    position: 'relative',
    fontSize: theme.fonts.big,
    width: '3rem',
    height: '2rem',
    textDecoration: 'none',
    padding: '0.2rem 1rem',
  },
  blogButton: {
    borderRadius: '8px',
    backgroundColor: theme.colors.mainGreen,
    color: theme.colors.white,
    '&:hover': {
      '& $backArrow': {
        width: '2rem',
      },
    },
  },
  portfolioButton: {
    border: `2px solid ${theme.colors.mainGreen}`,
    color: theme.colors.mainGreen,
    borderRadius: '0.4rem',
    '&:hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.mainGreen,
    },
  },
}));

const Navigation = ({ isBlog = true }) => {
  const classes = useStyles();
  const customStyle = isBlog ? classes.blogButton : classes.portfolioButton;

  return (
    <Link className={`${classes.backToHome} ${customStyle}`} to={'/'}>
      <img alt="back icon" src={BackArrow} className={classes.backArrow} />
      <span>BACK TO HOME</span>
    </Link>
  );
};

export default Navigation;
