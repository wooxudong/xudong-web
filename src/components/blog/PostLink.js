import React from 'react';
import { Link } from 'gatsby';
import withStyles from '@material-ui/styles/withStyles';
import { primary } from './styles/colors';
import Img from 'gatsby-image';
import { blog } from '../../contants/routes';

const styles = {
  card: {
    display: 'grid',
    backgroundColor: '#fff',
    borderRadius: '9px',
    border: '1px solid #eee',
    boxShadow: '0 0 30px #d5d5d5',
    overflow: 'hidden',
    lineHeight: '1.5',
    '&:hover': {
      color: primary,
    },
    '& img': {
      display: 'block',
    },
  },
  header: {
    padding: '1.5rem',
  },
  postTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
  },
  postMeta: {
    fontWeight: 100,
    marginBottom: 0,
    fontSize: '0.8rem',
  },
  postLink: {
    textDecoration: 'none',
  },
};

const PostLink = ({ post, classes }) => {
  const postPath = `${blog}/${post._meta.uid}`;
  return (
    <article className={classes.card}>
      <Link to={postPath}>
        {!!post.thumbnail && (
          <Img fluid={post.thumbnailSharp.childImageSharp.fluid} />
        )}
      </Link>
      <header className={classes.header}>
        <h2 className={classes.postTitle}>
          <Link to={postPath} className={classes.postLink}>
            {post.title}
          </Link>
        </h2>
        <div className={classes.postMeta}>{post.publish_date}</div>
      </header>
    </article>
  );
};
export default withStyles(styles)(PostLink);
