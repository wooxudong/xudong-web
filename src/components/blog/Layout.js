import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { mainGreen } from '../styles/colors';
import { blog } from '../../contants/routes';
import Header from '../buildingBlocks/Header';
import defaultTheme from '../styles/theme';

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '70rem',
    margin: '0 auto',
    '& img': {
      maxWidth: '100%',
    },
    '&:before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      borderTop: `0.8rem solid ${mainGreen}`,
    },
  },
  footer: {
    textAlign: 'center',
    margin: '5.5rem 0 1rem',
    color: '#666',
  },
};

const Layout = ({ classes, children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            blog {
              title
            }
          }
        }
      }
    `
  );
  return (
    <div className={classes.container}>
      <ThemeProvider theme={defaultTheme}>
        <Header title={data.site.siteMetadata.blog.title} linkTo={blog} />
        {children}
        <footer className={classes.footer}>
          <p>
            &copy; {new Date().getFullYear()} Wu Xudong. All Rights Reserved.
          </p>
        </footer>
      </ThemeProvider>
    </div>
  );
};
export default withStyles(styles)(Layout);
