import React from 'react';
import { Link } from 'gatsby';
import { blog } from '../../contants/routes';
import Image from '../buildingBlocks/Image';
import { makeStyles } from '@material-ui/styles';
import formatDate from '../buildingBlocks/dateFormatter';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'grid',
    backgroundColor: '#fff',
    borderRadius: '9px',
    border: '1px solid #eee',
    boxShadow: '0 0 30px #d5d5d5',
    overflow: 'hidden',
    lineHeight: '1.5',
    '&:hover': {
      color: theme.colors.mainGreen,
      '& $postMeta': {
        color: theme.colors.black,
      },
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
    fontWeight: 300,
    marginBottom: 0,
    fontSize: '0.8rem',
    color: theme.colors.darkGreen,
  },
  postLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  postTag: {
    fontSize: '0.6rem',
    fontWeight: 300,
    color: theme.colors.white,
    marginRight: '0.6rem',
    textTransform: 'capitalize',
    padding: '0.2rem 0.4rem',
    backgroundColor: theme.colors.mainGreen,
    borderRadius: '0.3rem',
  },
  tags: {
    '& $postTag:last-child': {
      marginRight: 0,
    },
  },
}));

const PostLink = ({ post }) => {
  const classes = useStyles();
  const postPath = `${blog}/${post._meta.uid}`;
  console.log(post);
  return (
    <article className={classes.card}>
      <Link to={postPath}>
        {!!post.thumbnail && (
          <Image sharp={post.thumbnailSharp} image={post.thumbnail} />
        )}
      </Link>
      <header className={classes.header}>
        <h2 className={classes.postTitle}>
          <Link to={postPath} className={classes.postLink}>
            {post.title}
          </Link>
        </h2>
        <div className={classes.postMeta}>
          {post.author} | {formatDate(post.publish_date)}
        </div>
        <div className={classes.tags}>
          {post.tags.map(({ tag }) => (
            <span key={tag} className={classes.postTag}>
              #{tag}
            </span>
          ))}
        </div>
      </header>
    </article>
  );
};
export default PostLink;
