import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import get from 'loadsh/get';
import { RichText } from 'prismic-reactjs';

export default ({ data }) => {
  const pageData = get(data, 'prismic.allBlogposts.edges.0.node', []);
  return (
    <Layout>
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.abstract} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!pageData.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{pageData.title}</h1>
              <div className="post-meta">{pageData.publish_date}</div>
            </div>
          )}
          {!!pageData.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${pageData.thumbnail.url})` }}
            >
              <h1 className="post-title">{pageData.title}</h1>
              <div className="post-meta">{pageData.publish_date}</div>
            </div>
          )}
          <div className="blog-post-content">
            {RichText.render(pageData.html)}
          </div>
        </article>
      </div>
    </Layout>
  );
};

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
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;
