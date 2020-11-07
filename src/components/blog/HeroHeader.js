import React from 'react';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  header: {
    maxWidth: '110rem',
  },
  headLine: {
    fontSize: '4rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
    fontFamily: 'Zhi Mang Xing, cursive',
  },
  description: {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    fontWeight: '300',
    padding: '0 1.5rem',
    position: 'relative',
    '& p:before': {
      content: 'open-quote',
      position: 'absolute',
      transform: 'translate(-1.5rem, -0.2rem)',
    },
    '& p:after': {
      content: 'close-quote',
      position: 'absolute',
      transform: 'translateY(0.8rem)',
      right: 0,
    },
  },
};

const HeroHeader = ({ classes, slogan, description }) => {
  return (
    <div className={classes.header}>
      <div className={classes.headLine}>{slogan}</div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeroHeader);
