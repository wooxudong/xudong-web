import React from "react";
import { withStyles } from "@material-ui/styles";
import colors from "../styles/colors";
import { RichText } from "prismic-reactjs";

const styles = {
  timelineEventIcon: {
    transform: "rotate(45deg)",
    backgroundColor: colors.white,
    display: "block",
    margin: "0.7rem 0.5rem 0.5rem -0.5rem",
    position: "absolute",
    top: 0,
    left: "2rem",
    width: "1.5rem",
    height: "1.5rem"
  },
  timelineEventThumbnail: {
    transition: "box-shadow 0.5s ease-in 0.1s",
    color: colors.black,
    fontSize: "0.75rem",
    backgroundColor: colors.white,
    boxShadow: `inset 0 0 0 0rem ${colors.mainGreen}`,
    display: "inline-block",
    marginBottom: "1.2rem",
    padding: "0.25rem 1rem 0.2rem 1rem",
    zIndex: 50
  },
  timelineEvent: {
    position: "relative",
    "&:hover": {
      "& $timelineEventIcon": {
        backgroundColor: colors.darkGreen
      },
      "& $timelineEventThumbnail": {
        boxShadow: `inset 40rem 0 0 0 ${colors.darkGreen}`
      }
    }
  },
  timelineEventCopy: {
    padding: "2rem",
    position: "relative",
    top: "-1.875rem",
    left: "4rem",
    width: "80%",
    color: "white",
    "& h3": {
      fontSize: "1.75em"
    },
    "& h4": {
      fontSize: "1.2rem",
      marginBottom: "1.2rem"
    },
    "& strong": {
      fontWeight: "700"
    },
    "& p:not($timelineEventThumbnail)": {
      paddingBottom: "1.2rem"
    }
  },
  timeline: {
    margin: "4rem auto !important",
    position: "relative",
    maxWidth: "46rem",
    listStyle: "none",
    paddingInlineStart: "unset",
    marginBlockStart: "unset",
    marginBlockEnd: "unset",
    "&:before": {
      display: "block",
      content: '""',
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      marginLeft: "3px",
      left: "2rem",
      width: "2px",
      height: "100%"
    }
  }
};

const Timeline = props => {
  const { entries, classes } = props;

  const events = entries.map(entry => (
    <li className={classes.timelineEvent} key={entry.company}>
      <div className={classes.timelineEventIcon} />
      <div className={classes.timelineEventCopy}>
        <p className={classes.timelineEventThumbnail}>{entry.year}</p>
        <h3>{entry.company}</h3>
        <h4>{entry.role}</h4>
        {RichText.render(entry.content)}
      </div>
    </li>
  ));
  return <ul className={classes.timeline}>{events}</ul>;
};

export default withStyles(styles)(Timeline);
