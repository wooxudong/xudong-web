import React from 'react';
import Layout from '../components/buildingBlocks/Layout';
import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import { portfolio } from '../contants/routes';
import SEO from '../components/buildingBlocks/SEO';
import HeroHeader from '../components/portfolio/HeroHeader';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { get } from 'loadsh';

const useStyles = makeStyles({
  grids: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '2rem',
    marginTop: '2rem',
    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});
const PortfolioPage = ({ data: { site, prismic } }) => {
  const classes = useStyles();
  const posts = get(prismic, 'allBlogposts.edges', []).map((edge) => edge.node);
  return (
    <Layout title={site.siteMetadata.portfolio.title} to={portfolio}>
      <SEO
        title={site.siteMetadata.portfolio.title}
        description={site.siteMetadata.description}
      />
      <HeroHeader slogan={site.siteMetadata.portfolio.slogan} />
      <div className={classes.grids}>
        {posts.map((post) => (
          <PortfolioCard post={post} key={post._meta.uid} />
        ))}
      </div>
    </Layout>
  );
};

export default PortfolioPage;
export const pageQuery = graphql`
  query portfolioPageQuery {
    site {
      siteMetadata {
        description
        portfolio {
          title
          slogan
        }
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
                fluid(maxWidth: 500, maxHeight: 200) {
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
