import React from "react";
import { makeStyles } from "@material-ui/styles";
import { RichText } from "prismic-reactjs";


const useStyles = makeStyles({
  container: {
    fontSize: '1.3rem',
    fontWeight: 300,
    fontStretch: 'semi-expanded',
    lineHeight: '2.2rem'
  }
});

export default ({ paragraph }) => {
  const classes = useStyles();
  return <div className={classes.container}>{RichText.render(paragraph)}</div>;
};
