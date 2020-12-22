import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '../home/Avatar';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 0 1rem 0',
    borderTop: `2px solid ${theme.colors.lightGrey}`,
    borderBottom: `2px solid ${theme.colors.lightGrey}`,
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    border: `solid 1px ${theme.colors.darkGreen}`,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  pitch: {
    paddingLeft: '1rem',
    borderLeft: `5px solid ${theme.colors.mainGreen}`,
    fontSize: '1.1rem',
    textAlign: 'justify',
    color: theme.colors.grey,
  },
  personalInfo: {
    display: 'flex',
    paddingBottom: '1rem',
  },
  nameTitleWraper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '.9rem',
    color: theme.colors.darkGreen,
  },
  contactMe: {
    textDecoration: 'none',
    color: theme.colors.grey,
    fontWeight: 'normal',
    display: 'inline-block',
    borderBottom: `2px solid ${theme.colors.mainGreen}`,
    transition: 'transform .25s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.2rem)',
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.personalInfo}>
        <div className={classes.avatar}>
          <Avatar small />
        </div>
        <div className={classes.nameTitleWraper}>
          <span className={classes.name}>Wú Xùdōng</span>
          <span className={classes.title}>Fullstack Software Engineer</span>
        </div>
      </div>
      <div className={classes.pitch}>
        I am a veteran software engineer with extensive experience in fields
        such as aerospace, financial services and consulting, now looking for
        opportunities to share my knowledge to help a company in need. And I
        always welcome challenges, enjoy solving complex and exciting problems,
        and would love to be involved in any startups. Please{' '}
        <Link to={'/contact'} className={classes.contactMe}>
          contact me
        </Link>{' '}
        here for more information
      </div>
    </div>
  );
};
