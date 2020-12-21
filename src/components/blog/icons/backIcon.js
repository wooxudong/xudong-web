import React from 'react';
import BackArrow from '../../../../static/image/icons/back.svg';
import { Link } from 'gatsby';
import { blog } from '../../../contants/routes';
import withStyles from '@material-ui/styles/withStyles';
import { mainGreen } from '../../styles/colors';

const styles = {
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
};

const backIcon = ({ classes }) => (
  <Link to={blog} className={classes.backIcon}>
    <img alt="back icon" src={BackArrow} />
    <p>
      <strong>Back to all posts</strong>
    </p>
  </Link>
);

export default withStyles(styles)(backIcon);
