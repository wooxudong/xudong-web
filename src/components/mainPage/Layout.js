import React from "react";
import Footer from "../UI/Footer";
import Background from "../UI/Background";
import { withStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
import SEO from "../SEO";
import { graphql, useStaticQuery } from "gatsby";
=======
import SEO from "../buildingBlocks/SEO";
import { graphql,  useStaticQuery } from "gatsby";
>>>>>>> bacda291948a6af3b30eb6ec717f17ce8cc3ac56

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    padding: "4rem 2rem",
    zIndex: 3,
    "&:before": {
      content: '""',
      display: "block"
    },
    "@media screen and (max-width: 1920px)": {
      padding: "3rem 2rem"
    },
    "@media screen and (max-width: 960px)": {
      padding: "2rem 1rem"
    },
    "@media screen and (max-width: 600px)": {
      padding: "1rem"
    }
  }
};

const Layout = ({ classes, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div className={classes.app}>
        {children}
        <Footer />
      </div>
      <Background />
    </>
  );
};

export default withStyles(styles)(Layout);
