import React, { useEffect } from "react";
import Markdown from "react-markdown";
import { RichText } from "prismic-reactjs";
import Prism from "prismjs";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
import "prismjs/components/prism-java.js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative"
  }
});

const CodeSlice = ({ content }) => {
  const rawMarkdown = RichText.asText(content);
  const classes = useStyles();

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={classes.container}>
      <Markdown source={rawMarkdown} />
    </div>
  );
};

export default CodeSlice;
