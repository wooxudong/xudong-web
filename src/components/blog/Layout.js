import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "./Navigation";
import "prismjs/themes/prism-okaidia.css";
import withStyles from "@material-ui/styles/withStyles";


const styles = {
  container:{
    padding: '2rem',
    maxWidth: '70rem',
    margin: '0 auto',
    '& img': {
      maxWidth: '100%',
    },
    '&:before': {
      display: 'block',
      content:'""',
      position: 'absolute',
      top: 0,
      left:0,
      width:'100%',
      borderTop: '0.8rem solid #381696'
    }
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5px 0',
    marginBottom: '2rem',
    alignItems: 'center',
  },
  title:{
    color: '#381696',
    fontWeight: 900,
    textTransform: 'uppercase',
    '& a': {
      textDecoration:'none',
    }
  },
  footer:{
    textAlign: 'center',
    margin: '5.5rem 0 1rem',
    color: '#666',
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
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className={classes.footer}>
        <p>
          &copy; 2020 Wu Xudong. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
export default withStyles(styles)(Layout);
