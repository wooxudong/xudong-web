import React from "react";
import Intro from "../components/home/Intro";
import Layout from "../components/home/Layout";
import { graphql } from "gatsby";
import { get } from "loadsh";

export default ({ data }) => {
  const timelineEvents = get(data, "prismic.allIntrs.edges[0].node.timeline_event", []);
  return (
    <Layout>
      <Intro timelineEvents={timelineEvents} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IntroQuery {
    prismic {
      allIntrs {
        edges {
          node {
            timeline_event {
              company
              content
              location
              role
              year
            }
          }
        }
      }
    }
  }
`;
