import React from "react";
import ContentPanel from "./shared/ContentPanel";
import Timeline from "../UI/Timeline";

const entries = [
  { year: 2018, description: "galdiroqwhgoewanflioagatwe" },
  { year: 1992, description: "hdgoaiwehkjnfjkasdguiohqoier" }
];
const intro = props => {
  return (
    <ContentPanel id="intro" title="Intro" {...props}>
      <Timeline entries={entries} />
    </ContentPanel>
  );
};

export default intro;
