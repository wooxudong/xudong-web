import React from "react";
import Work from "../components/home/Work";
import Layout from "../components/home/Layout";
import { graphql } from "gatsby";
import { get } from "loadsh";

export default ({ data }) => {
  const contents = get(data, "prismic.allWorks.edges[0].node.contents", []);
  console.log(contents);
  return (
    <Layout>
      <Work contents={contents} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query WorkPageQuery {
    prismic {
      allWorks {
        edges {
          node {
            contents {
              paragraph
            }
          }
        }
      }
    }
  }
`;
