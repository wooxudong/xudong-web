import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/blog/Layout";
import PostLink from "../components/blog/PostLink";
import HeroHeader from "../components/blog/HeroHeader";
import withStyles from "@material-ui/styles/withStyles";
import SEO from "../components/SEO";

const styles = {
  grids: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "2rem",
    marginTop: "2rem",
    "@media screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr"
    },
    "@media only screen and (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }
};

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges }
  },
  classes
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className={classes.grids}>{Posts}</div>
    </Layout>
  );
};

export default withStyles(styles)(BlogPage);
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
