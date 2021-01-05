import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'inline-block',
    minWidth: '8rem',
    padding: '.4rem 1rem',
    fontWeight: 700,
    fontSize: '1rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
      padding: '.3rem .7rem ',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  blogTag: {
    backgroundColor: theme.colors.mainGreen,
    color: 'white',
    borderRadius: '10% / 50%',
    '&:hover': {
      backgroundColor: theme.colors.darkGreen,
    },
  },
  portfolioTag: {
    border: '2px solid black',
    '&:hover': {
      border: `2px solid ${theme.colors.mainGreen}`,
      color: theme.colors.mainGreen,
    },
  },
  activePortfolioTag: {
    border: `2px solid ${theme.colors.mainGreen}`,
    color: theme.colors.mainGreen,
  },
  activeBlogTag: {
    backgroundColor: theme.colors.darkGreen,
  },
}));

const Tag = ({ text, action, isBlog = true, active = false }) => {
  const classes = useStyles();
  const handleClick = (event) => {
    const value = event.currentTarget.textContent;
    action(value);
  };
  let additionStyle = isBlog ? classes.blogTag : classes.portfolioTag;
  if (active) {
    const activeStyle = isBlog
      ? classes.activeBlogTag
      : classes.activePortfolioTag;
    additionStyle = `${additionStyle} ${activeStyle}`;
  }
  return (
    <div onClick={handleClick} className={`${classes.button} ${additionStyle}`}>
      {text}
    </div>
  );
};

export default Tag;
