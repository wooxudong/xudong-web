import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { mainGreen } from '../styles/colors';
import logo from '../../../static/image/icons/favicon.svg';
import Navigation from '../blog/Navigation';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem',
      height: '1.5rem',
    },
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '6rem',
    height: '5rem',
    alignItems: 'baseline',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.fonts.small,
    },
    fontSize: theme.fonts.big,
    position: 'relative',
    textTransform: 'uppercase',
    color: mainGreen,
    textDecoration: 'none',
    '&:before': {
      position: 'absolute',
      width: '100%',
      content: '""',
      bottom: 0,
      borderBottom: `4px solid ${mainGreen}`,
      transform: 'translateY(.5rem) scaleX(0)',
      transformOrigin: '0% center',
      transition: 'transform .25s ease-in-out',
    },
    '&:hover:before': {
      transform: 'translateY(.5rem) scaleX(1)',
    },
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      width: '2rem',
      height: '2rem',
      transform: 'translateY(.5rem)',
    },
    display: 'inline-block',
    width: '5rem',
    height: '5rem',
    transform: 'translateY(1.5rem)',
    marginRight: '.7rem',
  },
}));

export default ({ title, linkTo }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt={'logo'} className={classes.logo} />
        <Link to={linkTo} className={classes.title}>
          {title}
        </Link>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};
