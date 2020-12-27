import React from 'react';
import BackArrow from '../../../../static/image/icons/back.svg';
import { Link } from 'gatsby';
import { blog } from '../../../contants/routes';
import { mainGreen } from '../../styles/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  backIcon: {
    display: 'flex',
    alignItem: 'center',
    textDecoration: 'none',
    transition: 'transform .5s ease-in-out',
    color: mainGreen,
    '&:hover': {
      transform: 'scale(1.1) translateX(-0.2rem)',
    },
    '& img': {
      width: '2rem',
      display: 'inline-block',
      marginRight: '8px',
    },
    '& p': {
      display: 'inline-block',
    },
  },
});

const backIcon = ({ to = blog, textName = 'Back to all posts' }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.backIcon}>
      <img alt="back icon" src={BackArrow} />
      <p>
        <strong>{textName}</strong>
      </p>
    </Link>
  );
};

export default backIcon;
