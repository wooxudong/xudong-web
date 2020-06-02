import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  header: {
    padding: "0 0 2rem",
    maxWidth: "60rem"
  },
  headLine: {
    fontSize: "4rem",
    fontWeight: 900,
    marginBottom: "0.5rem",
    fontFamily: 'Zhi Mang Xing, cursive',
  },
  description: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
    fontWeight: "300",
    padding: '0 1.5rem',
    position: 'relative',
    '& p:before':{
      content:'open-quote',
      position: 'absolute',
      transform: 'translate(-1.5rem, -0.2rem)',
    },
    '& p:after':{
      content:'close-quote',
      position: 'absolute',
      transform: 'translate(-1rem, 0.8rem)',
      right: 0,
    }
  }
};
const HeroHeader = ({ classes }) => {
  const data = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `
  );

  return (
    <div className={classes.header}>
      <div className={classes.headLine}>
        {data.site.siteMetadata.home.title}
      </div>
      <div className={classes.description}>
        <p>{data.site.siteMetadata.home.description}</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeroHeader);
