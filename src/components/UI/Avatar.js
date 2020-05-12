import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { graphql, useStaticQuery } from "gatsby";

const styles = theme => ({
  avatar: {
    margin: 1
  },
  bigAvatar: {
    [theme.breakpoints.down("sm")]: {
      width: 60,
      height: 60
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 76,
      height: 76
    },
    [theme.breakpoints.up("md")]: {
      width: 84,
      height: 84
    }
  }
});

function ImageAvatars({ classes }) {
  const data = useStaticQuery(graphql`
    query AvatarImageQuery {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 84, quality: 100) {
            src
          }
        }
      }
    }
  `);
  return (
    <div className={classes.row}>
      <Avatar
        alt="Wu Xudong"
        src={data.file.childImageSharp.fluid.src}
        className={`${classes.avatar} ${classes.bigAvatar}`}
      />
    </div>
  );
}

export default withStyles(styles)(ImageAvatars);
