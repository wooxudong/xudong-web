import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { isBrowser } from '../../utils/isBrowser';

const useStyles = makeStyles((theme) => ({
  hireMe: {
    position: 'fixed',
    right: '3rem',
    top: '2rem',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '1.5rem',
    padding: '0.5rem',
    color: theme.colors.mainGreen,
    borderRadius: '0.4rem',
    textTransform: 'uppercase',
    overflow: 'hidden',
    display: 'none',
    [theme.breakpoints.up('ll')]: {
      display: (props) => (props.showScroll ? 'block' : 'none'),
    },
    '&:hover': {
      '&:before': {
        animation: '$rotate 4s linear infinite',
        backgroundImage: `linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5)`,
      },
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      zIndex: '-2',
      left: '-50%',
      top: '-100%',
      width: '200%',
      height: '300%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 50%, 50% 50%',
      backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
      background: theme.colors.mainGreen,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      zIndex: '-1',
      left: '0.175rem',
      top: '0.15rem',
      background: theme.colors.white,
      width: 'calc(100% - 0.3rem)',
      height: 'calc(100% - 0.3rem)',
      borderRadius: '0.25rem',
    },
  },
  '@keyframes rotate': {
    '100%': {
      transform: 'rotate(1turn)',
    },
  },
}));
const HireMeButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const classes = useStyles({ showScroll });

  const checkScrollTop = () => {
    if (isBrowser() && !showScroll && window.pageYOffset > 100) {
      setShowScroll(false);
    } else if (isBrowser() && showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  isBrowser() && window.addEventListener('scroll', checkScrollTop);

  return (
    <a
      href='https://www.upwork.com/freelancers/~010dd7850a217ddc47?viewMode=1'
      target='_blank'
      rel='noopener noreferrer'
      className={classes.hireMe}
    >
      Hire Me
    </a>
  );
};

export default HireMeButton;
