import React from "react";
import { Link } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";
import { mainGreen } from "./styles/colors";
<<<<<<< HEAD
import Img from "gatsby-image";
import { blog } from "../../contants/routes";
=======
import { blog } from "../../contants/routes";
import Image from "../buildingBlocks/Image";
>>>>>>> bacda291948a6af3b30eb6ec717f17ce8cc3ac56

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
      color: mainGreen
    },
    "& img": {
      display: "block"
    }
  },
  header: {
    padding: "1.5rem"
  },
  postTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.3rem"
  },
  postMeta: {
    fontWeight: 100,
    marginBottom: 0,
    fontSize: "0.8rem"
  },
  postLink: {
    color: "inherit",
    textDecoration: "none"
  }
};

const PostLink = ({ post, classes }) => {
  const postPath = `${blog}/${post._meta.uid}`;
  return (
    <article className={classes.card}>
      <Link to={postPath}>
        {!!post.thumbnail && (
          <Image
            sharp={post.thumbnailSharp}
            image={post.thumbnail}
          />
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
