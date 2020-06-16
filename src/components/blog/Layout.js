import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Navigation from "./Navigation";
import withStyles from "@material-ui/styles/withStyles";
import { mainGreen } from "../styles/colors";
import { blog } from "../../contants/routes";

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "70rem",
    margin: "0 auto",
    "& img": {
      maxWidth: "100%"
    },
    "&:before": {
      display: "block",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      borderTop: `0.8rem solid ${mainGreen}`
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5px 0",
    marginBottom: "2rem",
    height: "1.5rem",
    alignItems: "center"
  },
  title: {
    fontWeight: 900,
    position: "relative",
    textTransform: "uppercase",
    "& a": {
      color: mainGreen,
      textDecoration: "none"
    },
    "&:before": {
      position: "absolute",
      width: "100%",
      content: '""',
      bottom: 0,
      borderBottom: `4px solid ${mainGreen}`,
      transform: "translateY(.5rem) scaleX(0)",
      transformOrigin: "0% center",
      transition: "transform .25s ease-in-out"
    },
    "&:hover:before": {
      transform: "translateY(.5rem) scaleX(1)"
    }
  },
  footer: {
    textAlign: "center",
    margin: "5.5rem 0 1rem",
    color: "#666"
  }
};

const Layout = ({ classes, children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.title}>
          <Link to={blog}>{data.site.siteMetadata.title}</Link>
        </div>
        <div>
          <Navigation />
        </div>
      </header>
      {children}
      <footer className={classes.footer}>
        <p>&copy; {new Date().getFullYear()} Wu Xudong. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
export default withStyles(styles)(Layout);
