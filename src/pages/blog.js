import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/blog/Layout";
import PostLink from "../components/blog/PostLink";
import HeroHeader from "../components/blog/HeroHeader";
import withStyles from "@material-ui/styles/withStyles";
import SEO from "../components/buildingBlocks/SEO";
import Tag from "../components/UI/Button";
import { get } from "loadsh";

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
  },
  tags: {
    padding: "2rem 0",
    "& span": {
      fontSize: "1.5rem"
    },
    "& > *": {
      marginRight: ".5rem",
      marginBottom: ".5rem",
      "&:last-child": {
        marginRight: 0
      },
      "&:first-child": {
        marginRight: ".7rem"
      }
    }
  }
};

const BlogPage = ({ data: { site, prismic }, classes }) => {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState("all");

  useEffect(() => {
    const posts = get(prismic, "allBlogposts.edges", [])
      .filter(edge => (tag === "all" ? true : edge.node.tag === tag))
      .map(edge => edge.node);
    setPosts(posts);
  }, [tag]);

  let tags = get(prismic, "allBlogposts.edges", []).map(edge => edge.node.tag);
  tags.unshift("all");

  return (
    <Layout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader />
      <div className={classes.tags}>
        <span>Tags:</span>
        {tags.map(tag => (
          <Tag text={tag} action={(value) => setTag(value)} key={tag} />
        ))}
      </div>
      <h2>Blog Posts &darr;</h2>
      <div className={classes.grids}>
        {posts.map(post => (
          <PostLink key={post._meta.uid} post={post} />
        ))}
      </div>
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
                fluid(maxWidth: 500, maxHeight: 270) {
                  ...GatsbyImageSharpFluid_tracedSVG
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
