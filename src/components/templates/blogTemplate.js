import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../buildingBlocks/Layout';
import get from 'loadsh/get';
import SEO from '../buildingBlocks/SEO';
import withStyles from '@material-ui/styles/withStyles';
import Image from '../buildingBlocks/Image';
import SocialMedia from '../blog/socialMedia';
import BackIcon from '../blog/icons/backIcon';
import BodySlice from './blogSlices/sliceZone';
import { blog } from '../../contants/routes';
import formatDate from '../buildingBlocks/dateFormatter';
import Pitch from '../portfolio/Pitch';

const styles = {
  article: {
    background: '#fff',
    lineHeight: '1.5',
  },
  content: {
    margin: '0 auto',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    textAlign: 'center',
    margin: '0 0 0.5rem',
    lineHeight: 1.3,
    fontSize: '2rem',
    position: 'relative',
    zIndex: 3,
  },
  meta: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 3,
    textTransform: 'uppercase',
  },
  authorTags: {
    paddingBottom: '1rem',
    borderBottom: '1px solid grey',
    margin: '2rem 0',
  },
  image: {
    position: 'absolute !important',
    width: '100%',
    '&:before': {
      position: 'absolute',
      content: '""',
      background: 'rgba(0,0,0,0.4)',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
    },
  },
  thumbnail: {
    minHeight: '380px',
    borderRadius: '18px',
    marginBottom: '36px',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  bottomGroup: {
    paddingTop: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
const blogTemplate = ({ data, classes }) => {
  const pageData = get(data, 'prismic.allBlogposts.edges.0.node', {});
  return (
    <Layout title={data.site.siteMetadata.blog.title} to={blog}>
      <SEO title={pageData.title} description={pageData.abstract} />
      <article className={classes.article}>
        <div className={classes.thumbnail}>
          <div className={classes.image}>
            <Image sharp={pageData.thumbnailSharp} image={pageData.thumbnail} />
          </div>
          <div className={classes.titleContainer}>
            <h1 className={classes.title}>{pageData.title}</h1>
            <div className={classes.meta}>By {pageData.author}</div>
            <div className={classes.meta}>
              {formatDate(pageData.publish_date)}
            </div>
          </div>
        </div>
        <Pitch />
        <div className={classes.content}>
          <BodySlice body={pageData.body} />
        </div>
      </article>
      <div className={classes.bottomGroup}>
        <BackIcon />
        <SocialMedia />
      </div>
    </Layout>
  );
};

export default withStyles(styles)(blogTemplate);

export const pageQuery = graphql`
  query BlogDetailQuery($uid: String) {
    site {
      siteMetadata {
        blog {
          title
        }
      }
    }
    prismic {
      allBlogposts(uid: $uid) {
        edges {
          node {
            title
            author
            publish_date
            tags {
              tag
            }
            abstract
            thumbnail
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            body {
              ... on PRISMIC_BlogpostBodyRich_text {
                type
                primary {
                  paragraph
                }
              }
              ... on PRISMIC_BlogpostBodyCode {
                type
                label
                primary {
                  code
                }
              }
            }
          }
        }
      }
    }
  }
`;
