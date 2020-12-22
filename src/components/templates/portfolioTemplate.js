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
import { portfolio } from '../../contants/routes';
import HireMeButton from '../buildingBlocks/HireMeButton';
import Pitch from '../portfolio/Pitch';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  article: {
    lineHeight: '1.5',
  },
  content: {
    margin: '0 auto',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    margin: '0 0 0.5rem',
    lineHeight: 1.3,
    fontSize: '2rem',
    position: 'relative',
    zIndex: 3,
  },
  meta: {
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
}));
const portfolioTemplate = ({ data }) => {
  const pageData = get(data, 'prismic.allPortfolioitems.edges.0.node', {});
  const classes = useStyles();
  return (
    <Layout
      title={data.site.siteMetadata.portfolio.title}
      to={portfolio}
      isBlog={false}
    >
      <SEO title={pageData.title} description={pageData.abstract} />
      <HireMeButton />
      <Image sharp={pageData.thumbnailSharp} />
      <article className={classes.article}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>{pageData.title}</h1>
          <div className={classes.meta}>{pageData.publish_date}</div>
        </div>
        <Pitch />
        <div className={classes.content}>
          <BodySlice body={pageData.body} />
        </div>
      </article>
      <div className={classes.bottomGroup}>
        <BackIcon to={portfolio} textName={'Back to all portfolios'} />
        <SocialMedia />
      </div>
    </Layout>
  );
};

export default portfolioTemplate;

export const pageQuery = graphql`
  query PortfolioDetailQuery($uid: String) {
    site {
      siteMetadata {
        portfolio {
          title
        }
      }
    }
    prismic {
      allPortfolioitems(uid: $uid) {
        edges {
          node {
            title
            author
            publish_date
            tag
            abstract
            thumbnail
            thumbnailSharp {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
