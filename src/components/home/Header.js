import React from "react";
import Avatar from "../buildingBlocks/Avatar";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Paragraph from "./shared/Paragraph";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition:
      "transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out",
    backgroundImage:
      "radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%)",
    maxWidth: "100%",
    textAlign: "center",
    "& > *": {
      animationName: "$opacity-fade-in",
      animationDuration: "1s",
      transition: "opacity 0.325s ease-in-out",
      position: "relative",
      marginTop: "3.5rem"
    },
    "& > *:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "calc(-3.5rem - 1px)",
      left: "calc(50% - 1px)",
      width: "1px",
      height: "calc(3.5rem + 1px)",
      background: "#ffffff"
    },
    "& > :first-child": {
      marginTop: 0
    },
    "& > :first-child:before": {
      display: "none"
    },
    [theme.breakpoints.down("md")]: {
      padding: "1.5rem 0",

      "& > *": {
        marginTop: "2rem"
      },
      "& > *:before": {
        top: "calc(-2rem - 1px)",
        height: "calc(2rem + 1px)"
      }
    }
  },
  content: {
    border: 0,
    verticalAlign: "baseline",
    borderStyle: "solid",
    borderColor: "#ffffff",
    borderTopWidth: "1px",
    borderBottomWidth: "1px",
    maxWidth: "100%",
    "& p": {
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontSize: "0.8rem",
      lineHeight: 2,
      [theme.breakpoints.down("lg")]: {
        "& br": {
          display: "none"
        }
      },
      [theme.breakpoints.down("md")]: {
        "& p": {
          lineHeight: "1.875"
        }
      }
    }
  },
  logo: {
    width: "5.5rem",
    height: "5.5rem",
    border: "solid 1px #ffffff",
    borderRadius: "50%",
    overflow:'hidden',
    [theme.breakpoints.down("md")]: {
      width: "4.75rem",
      height: "4.75rem",
    }
  },
  inner: {
    animationName: "$inner-fade-in",
    animationDuration: "1s",
    transition:
      "max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out",
    transitionDelay: "0.25s",
    padding: "3rem 2rem",
    maxHeight: "40rem",
    overflow: "hidden",
    "& > :last-child": {
      marginBottom: 0
    },
    "& a": {
      transition:
        "color 0.2s ease-in-out, background-color 0.2s ease-in-out border-bottom-color 0.2s ease-in-out",
      color: "#ffffff",
      borderBottom: "dotted 1px rgba(255, 255, 255, 0.5)",
      textDecoration: "none",
      "&:hover": {
        borderBottomColor: "transparent"
      }
    },
    "& h1": {
      color: "#ffffff",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: "2.25rem",
      margin: "0 0 1rem 0",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      lineHeight: 1.3
    },
    [theme.breakpoints.down("md")]: {
      padding: "2.5rem 0rem"
    }
  },

  list: {
    display: "flex",
    verticalAlign: "baseline",
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
    border: "solid 1px #ffffff",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      minWidth: "10rem",
      maxWidth: "100%"
    }
  },
  listItem: {
    paddingLeft: 0,
    borderLeft: "solid 1px #ffffff",
    "&:first-child": {
      borderLeft: 0
    },
    "& a": {
      display: "block",
      minWidth: "7.5rem",
      height: "2.75rem",
      lineHeight: "2.75rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontSize: "0.8rem",
      borderBottom: 0,
      textDecoration: "none",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 300,
      color: "#ffffff",
      transition:
        "color 0.2s ease-in-out, background-color 0.2s ease-in-out border-bottom-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.075)"
      },
      "&:active": {
        backgroundColor: "rgba(255, 255, 255, 0.175)"
      }
    },
    [theme.breakpoints.down("md")]: {
      borderLeft: 0,
      borderTop: "solid 1px #ffffff",
      "&:first-child": {
        borderTop: 0
      },
      "& a": {
        height: "3rem",
        lineHeight: "3rem",
        minWidth: 0,
        width: "100%"
      }
    }
  },

  "@keyframes opacity-fade-in": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },

  "@keyframes inner-fade-in": {
    "0%": {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    },
    "100%": {
      maxHeight: "40rem",
      paddingTop: "3rem",
      paddingBottom: "3rem",
      opacity: 1
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Avatar />
      </div>
      <div className={classes.content}>
        <div className={classes.inner}>
          <h1>Wú Xùdōng</h1>
          <Paragraph>
            Developer, Cinephile. <br />
            Program sometimes, watch films always. <br />
            Douban:
            <a href="https://www.douban.com/people/FromInsideOut/">@mirai</a>.
          </Paragraph>
        </div>
      </div>
      <nav>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link to="/intro">Intro</Link>
          </li>
          <li className={classes.listItem}>
            <Link to="/work">Work</Link>
          </li>
          <li className={classes.listItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={classes.listItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
