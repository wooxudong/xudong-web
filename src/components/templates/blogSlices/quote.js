import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  darkGreen,
  lightGrey,
  lightRed,
  lightYellow,
  red,
  yellow,
} from '../../styles/colors';

const types = {
  QUOTE: 'QUOTE',
  INFO: 'INFO',
  WARNING: 'WARNING',
};
const useStyles = makeStyles({
  container: {
    margin: '0.5rem 0',
    borderLeft: ({ primaryColor }) => `6px solid ${primaryColor}`,
    padding: '0.5rem 0 0.5rem 1rem',
    fontSize: '1.4rem',
    fontWeight: 400,
    fontStretch: 'semi-expanded',
    lineHeight: '2.2rem',
    fontStyle: 'italic',
    background: ({ backgroundColor }) => backgroundColor,
  },
});

export default ({ quote, type }) => {
  let primaryColor = null;
  let backgroundColor = null;
  switch (type) {
    case types.INFO:
      primaryColor = yellow;
      backgroundColor = lightYellow;
      break;
    case types.WARNING:
      primaryColor = red;
      backgroundColor = lightRed;
      break;
    default:
      primaryColor = darkGreen;
      backgroundColor = lightGrey;
  }
  const classes = useStyles({ primaryColor, backgroundColor });
  return <div className={classes.container}>{quote}</div>;
};
