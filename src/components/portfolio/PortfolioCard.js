import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Image from '../buildingBlocks/Image';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  container: {
    padding: '0.5rem',
    color: theme.colors.black,
    '&:hover': {
      boxShadow: '0 0 30px #d5d5d5',
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: '1.3rem',
  },
  info: {
    margin: '1rem 0',
  },
}));

export default ({ post }) => {
  const classes = useStyles();

  return (
    <Link to={`portfolio/${post._meta.uid}`} className={classes.link}>
      <div className={classes.container}>
        <Image sharp={post.thumbnailSharp} image={post.thumbnail} />
        <div className={classes.info}>
          <span>
            {post.author} | {post.publish_date}
          </span>
          <h2 className={classes.title}>{post.title}</h2>
          <span>{post.abstract}</span>
        </div>
      </div>
    </Link>
  );
};
