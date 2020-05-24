import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  header: {
    padding: "0 0 4rem",
    maxWidth: "60rem"
  },
  headLine: {
    fontSize: "2.5rem",
    fontWeight: 900,
    marginBottom: "0.5rem"
  },
  description: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
    fontWeight: "300"
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
