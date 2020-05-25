import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputText from "./InputText";
import InputButton from "./InputButton";
import Textarea from "./Textarea";
import Label from "./Label";

const styles = {
  form: {
    margin: "0 0 2rem 0",
    "&:last-child": {
      marginBottom: 0
    }
  },
  fields: {
    display: "flex",
    flexWrap: "wrap",
    width: "calc(100% + 3rem)",
    margin: "-1.5rem 0 2rem -1.5rem",
    "@media screen and (max-width: 600px)": {
      width: "calc(100% + 3rem)",
      margin: "-1.5rem 0 2rem -1.5rem"
    }
  },
  field: {
    flexGrow: 0,
    flexShrink: 0,
    padding: "1.5rem 0 0 1.5rem",
    width: "calc(100% - 1.5rem)",
    "@media screen and (max-width: 600px)": {
      padding: "1.5rem 0 0 1.5rem",
      width: "calc(100% - 1.5rem)"
    }
  },
  half: {
    width: "calc(50% - 0.75rem)",
    "@media screen and (max-width: 600px)": {
      width: "calc(100% - 1.5rem)"
    }
  },
  actions: {
    display: "flex",
    cursor: "default",
    listStyle: "none",
    margin: "0 0 2rem -1rem",
    paddingLeft: "0",
    "& li": {
      padding: "0 0 0 1rem",
      verticalAlign: "middle"
    },
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      marginLeft: 0,
      width: "100% !important",
      "& li": {
        flexGrow: 1,
        flexShrink: 1,
        padding: "1rem 0 0 0",
        textAlign: "center",
        width: "100%"
      },
      "& li > *": {
        width: "100%"
      },
      "& li:first-child": {
        paddingTop: 0
      }
    }
  },
  hidden:{
    visibility: 'hidden',
  }
};

const form = props => {
  const { classes } = props;

  return (
    <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
      <div className={classes.hidden}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <div className={classes.fields}>
        <div className={`${classes.field} ${classes.half}`}>
          <Label htmlFor="name">Name</Label>
          <InputText type="text" name="name" id="name" />
        </div>
        <div className={`${classes.field} ${classes.half}`}>
          <Label htmlFor="email">Email</Label>
          <InputText type="text" name="email" id="email" />
        </div>
        <div className={classes.field}>
          <Label htmlFor="message">Message</Label>
          <Textarea name="message" id="message" rows="4" />
        </div>
        <div data-netlify-recaptcha="true"></div>
      </div>
      <ul className={classes.actions}>
        <li>
          <InputButton
            type="submit"
            value="Send Message"
            addtionStyle="primary"
          />
        </li>
        <li>
          <InputButton type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  );
};

export default withStyles(styles)(form);
