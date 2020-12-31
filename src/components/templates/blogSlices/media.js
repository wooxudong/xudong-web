import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { black, lightGrey, darkGreen, mainGreen } from '../../styles/colors';
import forwardArrow from '../../../../static/image/icons/forward-arrow.svg';

const useStyles = makeStyles({
  title: {
    fontSize: '1.5rem',
  },
  artist: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: darkGreen,
  },
  item: {},
  review: {
    fontSize: '1.1rem',
    position: 'relative',
    '&:before': {
      content: 'open-quote',
      position: 'absolute',
      transform: 'translate(-.8rem, -.2rem)',
    },
    '&:after': {
      content: 'close-quote',
      position: 'absolute',
      transform: 'translateX(.3rem, -.2rem)',
    },
  },
  forwardArrow: {
    position: 'absolute',
    right: '0',
    display: 'block',
    width: '2rem',
    transform: 'scale(0,.4)',
    transformOrigin: '0 50%',
    transition: 'transform .2s ease-in',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 5fr',
    columnGap: '1rem',
    alignItems: 'center',
    padding: '1rem 4rem 1rem 0',
    color: black,
    textDecoration: 'none',
    borderBottom: `1px solid ${lightGrey}`,
    transition: 'transform .5s ease-in-out',
    position: 'relative',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      '& $item': {
        marginBottom: '1rem',
      },
      '& $review': {
        paddingLeft: '.7rem',
      },
    },
    '&:hover': {
      transform: 'translateY(-0.2rem)',
      boxShadow: `0 10px 6px -6px ${lightGrey}`,
      '& $title': {
        color: mainGreen,
      },
      '& $artist': {
        color: black,
      },
      '& $forwardArrow': {
        transform: 'scale(1,1)',
      },
    },
  },
});

export default ({ artist, link, title1: title, review }) => {
  const classes = useStyles();
  return (
    <a
      className={classes.container}
      href={link.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={classes.item}>
        <div className={classes.title}>{title}</div>
        <div className={classes.artist}>{artist}</div>
      </div>
      <div className={classes.review}>{review}</div>
      <img
        alt='forward-arrow-icon'
        src={forwardArrow}
        className={classes.forwardArrow}
      />
    </a>
  );
};
