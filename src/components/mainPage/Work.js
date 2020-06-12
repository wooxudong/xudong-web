import React from "react";
import ContentPanel from "./shared/ContentPanel";
import Paragraph from "./shared/Paragraph";
import TableauResume from "../templates/tableauTemplate";
import { withStyles } from "@material-ui/styles";

const styles = {
  resume: {
    transform: "scale(0.65) translate(-26%, -30%)",
    height: "550px",
    "@media screen and (max-width: 1060px)": {
      display: "none"
    }
  }
};
const Work = ({ classes, contents }) => {
  return (
    <ContentPanel id="work" title="Work">
      {contents.map(content => (
        <Paragraph key={content.paragraph.length}>{content.paragraph}</Paragraph>
      ))}
      <div className={classes.resume}>
        <TableauResume url="https://public.tableau.com/views/WU_XUDONG_CV/Dashboard1" />
      </div>
    </ContentPanel>
  );
};

export default withStyles(styles)(Work);
