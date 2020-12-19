import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Image from '../buildingBlocks/Image';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    padding: '0.5rem',
    gridTemplateRows: '4fr 2fr',
    rowGap: 0,
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0 0 30px #d5d5d5',
      cursor: 'pointer',
    },
  },
  image: {
    maxHeight: '5rem',
  },
  title: {
    fontSize: '1.3rem',
  },
}));

export default ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Image sharp={post.thumbnailSharp} image={post.thumbnail} />
      <div>
        <p>
          {post.author} | {post.publish_date}
        </p>
        <h2 className={classes.title}>{post.title}</h2>
        <p>{post.abstract}</p>
      </div>
    </div>
  );
};
