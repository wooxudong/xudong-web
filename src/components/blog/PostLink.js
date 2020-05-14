import React from "react";
import { Link } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";
import { primary } from "./styles/colors";

// --card-bg: #fff;
// --card-bdr: #eee;
// --card-shadow: #d5d5d5;

const styles = {
  card: {
    display: "grid",
    backgroundColor: "#fff",
    borderRadius: "9px",
    border: "1px solid #eee",
    boxShadow: "0 0 30px #d5d5d5",
    overflow: "hidden",
    lineHeight: "1.5",
    "&:hover": {
      color: primary
    },
    '& img':{
      display: 'block',
    }
  },
  header: {
    padding: "1.5rem"
  },
  postTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
  },
  postMeta: {
    fontWeight: 100,
    marginBottom: 0,
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.66)',
  },
  postLink:{
    color: 'rgba(255,255,255,0.88)',
    textDecoration: 'none',
  }

};

const PostLink = ({ post, classes }) => (
  <article className={classes.card}>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header className={classes.header}>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
);
export default withStyles(styles)(PostLink);
