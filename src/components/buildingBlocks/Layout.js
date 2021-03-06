import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { mainGreen } from '../styles/colors';
import Header from './Header';
import defaultTheme from '../styles/theme';
import Footer from './Footer';
import HireMeButton from './HireMeButton';

const useStyles = makeStyles({
  container: {
    padding: '1rem 2rem',
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
  header: {
    position: 'fixed',
  },
  footer: {
    textAlign: 'center',
    margin: '5.5rem 0 1rem',
    color: '#666',
  },
});

const Layout = ({ children, title, to, isBlog = true }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ThemeProvider theme={defaultTheme}>
        <Header
          title={title}
          linkTo={to}
          isBlog={isBlog}
          className={classes.header}
        />
        <HireMeButton />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};
export default Layout;
