import React from "react";
import { graphql } from "gatsby";
import Layout from "../blog/Layout";
import get from "loadsh/get";
import { RichText } from "prismic-reactjs";
import SEO from "../buildingBlocks/SEO";
import withStyles from "@material-ui/styles/withStyles";
import Image from "../buildingBlocks/Image";

const styles = {
  article: {
    background: "#fff",
    lineHeight: "1.5"
  },
  content: {
    maxWidth: "768px",
    margin: "0 auto",
    "&:last-child": {
      marginBottom: 0
    }
  },
  title: {
    textAlign: "center",
    margin: "0 0 0.5rem",
    lineHeight: 1.3,
    fontSize: "2rem",
    position: "relative",
    zIndex: 3
  },
  meta: {
    marginBottom: "2rem",
    textAlign: "center",
    position: "relative",
    zIndex: 3
  },
  image: {
    position: "absolute !important",
    width: "100%",
    height: "100%",
    "&:before": {
      position: "absolute",
      content: '""',
      background: "rgba(0,0,0,0.4)",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2
    }
  },
  thumbnail: {
    minHeight: "380px",
    borderRadius: "18px",
    marginBottom: "36px",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  }
};
const blogTemplate = ({ data, classes }) => {
  const pageData = get(data, "prismic.allBlogposts.edges.0.node", {});
  return (
    <Layout>
      <SEO title={pageData.title} description={pageData.abstract} />
      <article className={classes.article}>
        <div className={classes.thumbnail}>
          <div className={classes.image}>
            <Image sharp={pageData.thumbnailSharp} image={pageData.thumbnail} />
          </div>
          <div className={classes.titleContainer}>
            <h1 className={classes.title}>{pageData.title}</h1>
            <div className={classes.meta}>{pageData.publish_date}</div>
          </div>
        </div>
        <div className={classes.content}>{RichText.render(pageData.html)}</div>
      </article>
    </Layout>
  );
};
export default withStyles(styles)(blogTemplate);

export const pageQuery = graphql`
  query BlogpostQuery($uid: String) {
    prismic {
      allBlogposts(uid: $uid) {
        edges {
          node {
            html
            title
            author
            publish_date
            tag
            abstract
            thumbnail
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
