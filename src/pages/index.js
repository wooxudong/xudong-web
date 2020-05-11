import React from "react";
import Layout from "../components/mainPage/Layout";
import Header from "../components/mainPage/Header";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <Layout backgroundImage={data.backgroundImage.childImageSharp.fluid.srcWebp}>
      <Header />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BackgroundImageQuery {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          srcWebp
        }
      }
    }
  }
`;
