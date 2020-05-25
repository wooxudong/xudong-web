import React from "react";
import ContentPanel from "./shared/ContentPanel";
import Timeline from "../UI/Timeline";


const intro = props => {
  return (
    <ContentPanel id="intro" title="Intro" {...props}>
      <Timeline entries={props.timelineEvents} />
    </ContentPanel>
  );
};

export default intro;
