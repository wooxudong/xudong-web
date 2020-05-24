import React from "react";
import { withStyles } from "@material-ui/styles";

const color1 = "white";
const color2 = "black";
const color3 = "rgb(168, 50, 121)";

const styles = {
  timelineEventIcon: {
    transform: "rotate(45deg)",
    backgroundColor: color1,
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
    color: color2,
    fontSize: "0.75rem",
    backgroundColor: color1,
    boxShadow: "inset 0 0 0 0rem #ef795a",
    display: "inline-block",
    marginBottom: "1.2rem",
    padding: "0.25rem 1rem 0.2rem 1rem",
    zIndex: 50
  },
  timelineEvent: {
    position: "relative",
    "&:hover": {
      "& $timelineEventIcon": {
        backgroundColor: color3
      },
      "& $timelineEventThumbnail": {
        boxShadow: `inset 40rem 0 0 0 ${color3}`
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
  return (
    <ul className={classes.timeline}>
      <li className={classes.timelineEvent}>
        <label className={classes.timelineEventIcon} />
        <div className={classes.timelineEventCopy}>
          <p className={classes.timelineEventThumbnail}>April 2011 - heute</p>
          <h3>Geil,Danke! GmbH</h3>
          <h4>Geschäftsführerin eines Web-Studios</h4>
          <p>
            <strong>Schwerpunkt: Frontend-Entwicklung</strong>
            <br />
            Entwickeln von anspruchsvollen, animierten, responsive und adaptive
            Webseiten mit HTML5, SCSS, jQuery; für alle Browser, optimiert für
            Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).
          </p>
          <p>
            <strong>Projektmanagement mit Scrum</strong>
            <br />
            Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise
            durch Grunt, Yeoman, GIT, JIRA und BrowserStack.
          </p>
        </div>
      </li>
      <li className={classes.timelineEvent}>
        <label className={classes.timelineEventIcon} />
        <div className={classes.timelineEventCopy}>
          <p className={classes.timelineEventThumbnail}>
            November 2009 - März 2011
          </p>
          <h3>Freelancer</h3>
          <h4>Designer und Autor</h4>
          <p>
            Konzeption, Design und Produktion von Digitalen Magazinen mit
            InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin
            der Fachbücher "Digitales Publizieren für Tablets" und "Adobe
            Digital Publishing Suite" erschienen im dpunkt.verlag.
          </p>
        </div>
      </li>
      <li className={classes.timelineEvent}>
        <label className={classes.timelineEventIcon} />
        <div className={classes.timelineEventCopy}>
          <p className={classes.timelineEventThumbnail}>April 2011 - heute</p>
          <h3>konplan gmbh</h3>
          <h4>IT-Consultant</h4>
          <p>
            <strong>Systemarchitektur, Consulting</strong>
            Konzeption und Modellierung von Systemen und APIs für Digital
            Publishing und Entitlement nach SOA
          </p>
        </div>
      </li>
    </ul>
  );
};

export default withStyles(styles)(Timeline);
