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

const BlogPage = ({ data: { site, prismic }, classes }) => {
  const Posts = prismic.allBlogposts.edges.map(edge => (
    <PostLink key={edge.node._meta.uid} post={edge.node} />
  ));

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
    prismic {
      allBlogposts(sortBy: publish_date_DESC) {
        edges {
          node {
            title
            author
            tag
            thumbnail
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            abstract
            publish_date
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;
